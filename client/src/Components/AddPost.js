import React, {Component} from 'react';
import axios from 'axios'

export default class AddPost extends Component{

  constructor(){
    super();

    this.state = {
      title:'',
      category: '',
      description: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    var post = {
      title: this.state.title,
      category: this.state.category,
      description: this.state.description
    }
    axios.post('http://localhost:4000/post/post', post)
      .then(res=>{
        console.log('Post has been created!');
        this.props.history.push('/home')
      })
      .catch(err=>{console.log(err)});
  }

  render(){
    return(
      <div>

        <form onSubmit={this.onSubmit}>

          <div>
            <label>Title</label>
            <input type="text" name="title" onChange={this.onChange} />
          </div>

          <div>
            <label>Category</label>
            <input type="text" name="category" onChange={this.onChange} />
          </div>

          <div>
            <label>Description</label>
            <textarea name="description" onChange={this.onChange} />
          </div>

          <div>
            <button type="submit">
              Submit
            </button>
          </div>

        </form>

      </div>
    )
  }
}
