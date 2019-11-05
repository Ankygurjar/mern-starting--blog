const express = require('express')
const user_router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const Users = require('../models/user_model')

user_router.use(cors());

process.env.SECRET_KEY = 'secret'

user_router.get('/', (req, res)=>{
  Users.find()
    .then(users=>{
      res.json(users)
    })
})

user_router.post('/register', (req, res)=>{
  const newUser = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password
  }
  Users.findOne({
    email: req.body.email
  })
    .then(user=>{
      if(!user){
      bcrypt.hash(req.body.password, 10, (err, hash)=>{
        newUser.password = hash;
        Users.create(newUser)
          .then(user=>{
            res.json({status:'User with email '+user.email+' is registered'})
          })
          .catch(err=>{
            res.send({error: err})
          })
      })
    }else{
      res.json('User is already registered!!')
    }
    })
    .catch(err=>{
      res.json({error: err});
    })
})

user_router.post('/login', (req, res)=>{
  Users.findOne({
    email: req.body.email
  })
  .then(user=>{
    if(user){
    if(bcrypt.compareSync(req.body.password, user.password)){
      const payload = {
        _id: user._id,
        fname: user.fname,
        lname: user.lname,
        email: user.email
      }
      let token = jwt.sign(payload, process.env.SECRET_KEY,{expiresIn: 23000})
      res.send("Generated Token : "+ token)
    }else{
      res.json({error:"User does not exist"})
    }
  }else{
    res.json({error:"User does not exist"})
  }
  })
  .catch(err=>{
    res.send("error : "+ err)
  })
})

module.exports = user_router;
