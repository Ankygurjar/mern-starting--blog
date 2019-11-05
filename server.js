const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

require('events').EventEmitter.defaultMaxListeners = 15;

app.use(cors());

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());

process.env.PORT = 4000;
const DB_PORT = 'mongodb+srv://anky:mukeshmaa08@cluster0-dmzhq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(DB_PORT,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(res=>console.log("Server is connected with the database"))
  .catch(err=>console.log(err))

const router = require('./routing/post_routing')
app.use('/post',router)

const user_router = require('./routing/user_routing')
app.use('/user', user_router)

app.listen(process.env.PORT, ()=>{
  console.log('Server is running on ', process.env.PORT)
})
