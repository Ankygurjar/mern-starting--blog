import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

export default class Profile extends Component{

  constructor(){
    super();

    this.state = {
      fname: '',
      lname: '',
      email: ''
    }

  }

  componentDidMount(){
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    this.setState({
      fname: decode.fname,
      lname: decode.lname,
      email: decode.email
    });
  }

  render(){
    return(
      <div>

        <h4>{this.state.fname}  {this.state.lname}</h4>
        <b>{this.state.email}</b>

      </div>
    )
  }
}
