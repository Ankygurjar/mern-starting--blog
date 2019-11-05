import axios from 'axios'

export const register = newUser =>{
  return axios.post('http://localhost:4000/user/register',{
    fname: newUser.fname,
    lname: newUser.lname,
    email: newUser.email,
    password: newUser.password
  })
  .then(res=>{
    console.log("Registered");
  })
}

export const login = user =>{
  return axios.post('http://localhost:4000/user/login',{
    email: user.email,
    password: user.password
  })
  .then(res=>{
    localStorage.setItem('usertoken',res.data)
    console.log(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
}
