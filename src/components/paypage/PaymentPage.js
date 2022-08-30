import '../signup-login/styling/loginForm.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {
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
    navigate('/')
  }
  
  return (
    <div className='signup-form-container'>
      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className='user-input-signup-form'>
          <label className='label'>Name:</label>
          <input className='input' onChange={handleChange} id='username' value={user.username} placeholder="name"/>

          <label className='label'>Email:</label>
          <input className='input' onChange={handleChange} id='email' value={user.email} placeholder="email"/>


          <label className='label'>First Name:</label>
          <input className='input' onChange={handleChange} id='firstName' value={user.firstName} placeholder="first name"/>

          <label className='label'>Last Name:</label>
          <input className='input' onChange={handleChange} id='lastName' value={user.lastName} placeholder="last name"/>
          <label className='label'>Mailing Address:</label>
          <input className='input' onChange={handleChange} id='password' value={user.password} placeholder="mailing address" type="password"/>

          <label className='label'>Billing Address:</label>
          <input className='input' onChange={handleChange} id='password' value={user.password} placeholder="billing address" type="password"/>

          <label className='label'>Card:</label>
          <input className='input' onChange={handleChange} id='isAdmin' value={user.isAdmin} placeholder="card"/>
        </div>
        <button id='item-form-button' type="submit">submit</button>
      </form>
    </div>
  )
}

export default PaymentPage