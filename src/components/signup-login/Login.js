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

  const handleChange = (event) => {
    event.preventDefault()
    setUserLogin({ ...userLogin, [event.target.id]: event.target.value })
    console.log(event.target.id)
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(url, userLogin)
      .then((res) => {
        const data = res.data
        if(data.user.isAdmin === true){
          console.log(data)
          window.localStorage.setItem('token', data.token)
        
          navigate(`/${data.user.username}/setstore`)
        }else {
          navigate('/')
        }
      })
      console.log(token)
  }


  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id='username' value={userLogin.username} placeholder="username"/>
        <input onChange={handleChange} id='email' value={userLogin.email} placeholder="email"/>
        <input onChange={handleChange} id='password' value={userLogin.password} placeholder="password" type="password"/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Login

// if users log out, you need to delete token