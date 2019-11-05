import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import AddPost from './Components/AddPost'
import Profile from './Components/profile'
import Post from './Components/post'
import Footer from './Components/footer'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <Route exact path='/' component={Home}/>
          <div>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login}/>
            <Route path='/addPost' component={AddPost}/>
            <Route path='/profile' component={Profile} />
            <Route path='/post/:id' component={Post} />
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
