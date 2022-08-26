import '../../App.css';
import axios from 'axios'
import { Link, Navigate, Outlet, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProfilePic from './ProfilePic';

const AdminPage = () => {
  const { username } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const [profileImage, setProfileImage] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${username}`)
      .then((res) => setUser(res.data))
  },[])

  const handleClick = () => {
    navigate(`/profile-image/${user._id}`)
  }
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
        handleClick={handleClick}
        />

        <h1>{user.firstName}</h1>
        <p>{user.email}</p>
      </div>
      <nav>
        <Link to='setstore'>Start Selling</Link>
        <Link to={`view-admin-store`}>See Store Front</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default AdminPage