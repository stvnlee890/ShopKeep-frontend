import './styling/loginForm.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const url = 'http://localhost:8080/user/login'
  const navigate = useNavigate()

  const initialFormState = {
    username: '',
    email: '',
    password: '',
  }

  const [userLogin, setUserLogin] = useState(initialFormState)
  const [token, setToken] = useState()
  // const [isLoggedIn, setIsLoggedIn] = useState(false)


  const handleChange = (event) => {
    event.preventDefault()
    setUserLogin({ ...userLogin, [event.target.id]: event.target.value })
  }
  // set to local storage, isLoggedIn = true, username, token

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(url, userLogin)
      .then((res) => {
        const data = res.data
        if(data.user.isAdmin === true){
          console.log(data)
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('user', data.user.username)
          window.localStorage.setItem('isLoggedIn', true)
          // navigate(`/${data.user.username}/adminpage`)
          navigate('/')
        }else {
          window.localStorage.setItem('user', data.user.username)
          window.localStorage.setItem('isLoggedIn', true)
          navigate('/')
        }
      })
      console.log(token)
  }

  // provider 

  return (
    <div className='login-form-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>

        <div className='user-input-form'>
          <label className='label'>Username:</label>
          <input className='input'
             onChange={handleChange} 
             id='username' 
             value={userLogin.username} 
             placeholder="username"/>

          <label className='label'>Email:</label>
          <input className='input'
            onChange={handleChange} 
            id='email' value={userLogin.email} 
            placeholder="email"/>

          <label className='label'>Password:</label>
          <input className='input'
            onChange={handleChange} 
            id='password' 
            value={userLogin.password} 
            placeholder="password"
            type="password"/>
        </div>

        <button 
         id='item-form-button'
         type="submit">submit</button>
      </form>
    </div>
  )
}

export default Login

// if users log out, you need to delete token