import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'

class Home extends Component{

  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/post')
      .then(res=>{
        this.setState({
          posts: res.data
        })
      })
      .catch(err=>{
        console.log(err)
      })
  }

  render(){
    return(
      <div>
        {this.state.posts.map((post, i)=>{
          return(
            <div key={i}>
              <h4><Link to={`/post/${post._id}`}>{post.title}</Link></h4>
              <b>{post.category}</b>
              <p>{post.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Home
