import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signout = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  window.localStorage.removeItem('isLoggedIn')
  
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  },[])
  return (
  <div>
    <h1>Sign Out</h1>
  </div>
  )
}

export default Signout