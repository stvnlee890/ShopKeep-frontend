import '../signup-login/styling/loginForm.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {
  const url = 'https://shopkeepapp.herokuapp.com/user/signup'
  const navigate = useNavigate()

  const initialFormState = {
    name: '',
    email: '',
    firstName: '',
    lastName: '',
    mailingAddress: '',
    billingAddress: '',
    card: '',
  }
  const [user, setUser] = useState(initialFormState)

  const handleChange = (event) => {
    event.preventDefault()
    setUser({ ...user, [event.target.id]: event.target.value })
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
          <input className='input' onChange={handleChange} id='name' value={user.username} placeholder="name"/>

          <label className='label'>Email:</label>
          <input className='input' onChange={handleChange} id='email-p' value={user.email} placeholder="email"/>


          <label className='label'>First Name:</label>
          <input className='input' onChange={handleChange} id='firstName-p' value={user.firstName} placeholder="first name"/>

          <label className='label'>Last Name:</label>
          <input className='input' onChange={handleChange} id='lastName-p' value={user.lastName} placeholder="last name"/>
          <label className='label'>Mailing Address:</label>
          <input className='input' onChange={handleChange} id='mailingAddress' value={user.password} placeholder="mailing address" type="password"/>

          <label className='label'>Billing Address:</label>
          <input className='input' onChange={handleChange} id='BillingAddress' value={user.password} placeholder="billing address" type="password"/>

          <label className='label'>Card:</label>
          <input className='input' onChange={handleChange} id='card' value={user.isAdmin} placeholder="card"/>
        </div>
        <button id='item-form-button' type="submit">submit</button>
      </form>
    </div>
  )
}

export default PaymentPage