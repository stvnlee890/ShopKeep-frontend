// import '../../App.css';
import './styling/profile.css'
import axios from 'axios'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProfilePic from './ProfilePic';

const AdminPage = () => {
  const { username } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${username}`)
      .then((res) => setUser(res.data))
  },[])


  if(!user){
    return (
      <p>loading</p>
    )
  }
  return (
    <>
      <div className='profile-pic-container'>
        <ProfilePic 
        userid={user._id}
        userFirstName={user.firstName}
        userEmail={user.email}
    
        />
      </div>
      <div className='admin-page-button-container'>
      {!user.isAdmin ? null:
      <nav className='admin-page-button'>
        <Link id='admin-store-button' to='setstore'><span>Start Selling</span></Link>
        <Link id='admin-store-button' to={`view-admin-store`}><span>Store Front</span></Link>
      </nav>
      }
      </div>
      <Outlet />
    </>
  )
}

export default AdminPage