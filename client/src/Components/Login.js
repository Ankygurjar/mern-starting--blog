import React, {Component} from 'react'
import {login} from './userFunctions'

export default class Login extends Component{

  constructor(){
    super();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    email:'',
    password:''
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    var user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user)
      .then(res=>{
        this.props.history.push('/');
      })
  }

  render(){
    return(
      <div>

        <form onSubmit={this.onSubmit}>

          <div>
            <label>Email</label>
            <input type="email" onChange={this.onChange} name="email" />
          </div>

          <div>
            <label>Password</label>
            <input type="password" onChange={this.onChange} name="password" />
          </div>

          <div>
            <button type="submit">
              Login
            </button>
          </div>

        </form>

      </div>
    )
  }
}
