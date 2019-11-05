import React, {Component} from 'react'
import {register} from './userFunctions'

export default class Register extends Component{

  constructor(){
    super();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    var user = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password
    }
    register(user)
      .then(res=>{
        this.props.history.push('/login');
      })
  }

  render(){
    return(
      <div>

        <form onSubmit={this.onSubmit}>

          <div>
            <label>First Name</label>
            <input type="text" name="fname" onChange={this.onChange}/>
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" name="lname" onChange={this.onChange}/>
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" onChange={this.onChange}/>
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" onChange={this.onChange}/>
          </div>

          <button type="submit">
            Register
          </button>

        </form>

      </div>
    )
  }
}
