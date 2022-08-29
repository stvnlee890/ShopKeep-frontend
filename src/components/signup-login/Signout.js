import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signout = ({ signout }) => {

  const navigate = useNavigate()

  useEffect(() => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  window.localStorage.removeItem('isLoggedIn')
  navigate('/')
  },[])

  return (
  <div>
    <button onClick={signout}>Sign Out</button>
  </div>
  )
}

export default Signout