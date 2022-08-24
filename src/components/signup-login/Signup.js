
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const url = 'http://localhost:8080/user/signup'
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id='username' value={user.username} placeholder="username"/>
        <input onChange={handleChange} id='email' value={user.email} placeholder="email"/>
        <input onChange={handleChange} id='password' value={user.password} placeholder="password" type="password"/>
        <input onChange={handleChange} id='firstName' value={user.firstName} placeholder="first name"/>
        <input onChange={handleChange} id='lastName' value={user.lastName} placeholder="last name"/>
        <input onChange={handleChange} id='isAdmin' value={user.isAdmin} placeholder="is admin"/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Signup