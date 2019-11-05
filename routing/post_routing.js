const express = require('express')
const post_router = express.Router();
const cors = require('cors')

post_router.use(cors())
const Post = require('../models/post_model')

post_router.get('/', (req, res)=>{
  Post.find()
    .then(posts=>{
      res.json(posts)
    })
    .catch(err=>{
      res.json(err)
    })
})

post_router.post('/post', (req, res)=>{
  var blog = {
    title: req.body.title,
    category: req.body.category,
    description: req.body.description
  }

    Post.create(blog)
      .then(success=>res.json({done:'Data has been uploaded'}))
})

post_router.get('/post/:id',(req, res)=>{
  Post.findById(req.params.id)
    .then(data=>{
      res.json(data)
    })
    .catch(err=>{
      res.json(err)
    })
})

post_router.put('/edit/:id', (req, res)=>{
  var e_user = {
    title: req.body.title,
    category: req.body.category,
    description: req.body.description
  }

  Post.findByIdAndUpdate(req.params.id, e_user)
    .then(post=>{
      res.status(200).json(post)
    })
    .catch(err=>res.json(err))
})

post_router.delete('/delete/:id', (req, res)=>{
  Post.findByIdAndRemove(req.params.id)
    .then(deleted=>{
      res.json(deleted)
    })
    .catch(err=>{
      res.json(err)
    })
})

module.exports = post_router;
