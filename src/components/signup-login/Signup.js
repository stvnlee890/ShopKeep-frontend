import './styling/loginForm.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const url = 'https://shopkeepapp.herokuapp.com/user/signup'
  const navigate = useNavigate()

  const initialFormState = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    isAdmin: '',
  }
  const [user, setUser] = useState(initialFormState)

  const handleChange = (event) => {
    event.preventDefault()
    setUser({ ...user, [event.target.id]: event.target.value })
    console.log(event.target.id)
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(url, user)
      .then((res) => console.log(res.data))
      .then(() => navigate('/login'))
  }
  
  return (
    <div className='signup-form-container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='user-input-signup-form'>
          <label className='label'>Username:</label>
          <input className='input' onChange={handleChange} id='username' value={user.username} placeholder="username"/>

          <label className='label'>Email:</label>
          <input className='input' onChange={handleChange} id='email' value={user.email} placeholder="email"/>

          <label className='label'>Password:</label>
          <input className='input' onChange={handleChange} id='password' value={user.password} placeholder="password" type="password"/>

          <label className='label'>First Name:</label>
          <input className='input' onChange={handleChange} id='firstName' value={user.firstName} placeholder="first name"/>

          <label className='label'>Last Name:</label>
          <input className='input' onChange={handleChange} id='lastName' value={user.lastName} placeholder="last name"/>

          <label className='label'>Is Admin:</label>
          <input className='input' onChange={handleChange} id='isAdmin' value={user.isAdmin} placeholder="is admin"/>
        </div>
        <button id='item-form-button' type="submit">submit</button>
      </form>
    </div>
  )
}

export default Signup