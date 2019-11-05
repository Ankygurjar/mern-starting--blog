const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var PostSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required: true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = Post = mongoose.model('Posts', PostSchema)
