import '../../App.css';
import axios from 'axios'
import { Link, Navigate, Outlet, useParams, useNavigate } from 'react-router-dom'
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
      <div>
        <ProfilePic 
        userid={user._id}
        userFirstName={user.firstName}
        userEmail={user.email}
    
        />
      </div>
      {!user.isAdmin ? null:
      <nav>
        <Link to='setstore'>Start Selling</Link>
        <Link to={`view-admin-store`}>See Store Front</Link>
      </nav>
      }
      <Outlet />
    </>
  )
}

export default AdminPage