import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import '../App.css'

class Navbar extends Component {

  logout(e){
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push('/')
  }

  render(){

    const regLoginLink = (

        <ul>
          <li>
            <Link to='/register'>
              Register
            </Link>
          </li>

          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </ul>
    )

    const userLink = (
      <ul>

        <li>
          <Link to='/profile'>
            Profile
          </Link>
        </li>

        <li>
          <Link to='/addPost'>
            Add New Post
          </Link>
        </li>

        <li>
          <button onClick={this.logout.bind(this)}>
            Logout
          </button>
        </li>

      </ul>
    )

    return(
      <nav>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
        </ul>
          { localStorage.usertoken ? userLink: regLoginLink }
      </nav>
    )
  }
}
export default withRouter(Navbar)
