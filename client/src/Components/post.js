import React, {Component} from 'react'
import axios from 'axios'

export default class Post extends Component{

  constructor(){
    super();

    this.state = {
      post: []
    }

  }

  componentDidMount(){
    axios.get(`http://localhost:4000/post/post/${this.props.match.params.id}`)
      .then(res=>{
        this.setState({
          post: res.data
        })
      })
  }

  render(){
    return(
      <div>

        <h3>{this.state.post.title}</h3>
        <b>{this.state.post.date}</b>
        <p>{this.state.post.description}</p>

      </div>
    )
  }
}
