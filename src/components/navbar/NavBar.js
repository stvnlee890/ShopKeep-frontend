import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavBar = () => {
const [isLoggedIn, setIsLoggedIn] = useState('')
const [username, setUsername] = useState('')


const localStorage = () => {
  setUsername(window.localStorage.getItem('user'))
  setIsLoggedIn(window.localStorage.getItem('isLoggedIn'))
}

useEffect(() => {
  localStorage()
 },[isLoggedIn])

console.log(username)

  if(isLoggedIn === 'true') {
    return (
      <div>
        <NavLink to='/signout'>Signout</NavLink>
        <NavLink to={`${username}/adminpage`}>Profile</NavLink>
        <NavLink to='/'><h1>ShopKeep</h1></NavLink>
      </div>
    )
  } 

  if(isLoggedIn !== 'true'){
    return  (
      <div> 
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/'><h1>ShopKeep</h1></NavLink>
      </div>
    )
  }
   
}

export default NavBar