import '../../App.css';
import axios from 'axios'
import { Link, Navigate, Outlet, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
        {!profileImage ? 
  
        <img onClick={handleClick}
        className='profile-image' 
        alt='default Image' 
        src='https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bottle-green-solid-color-background.jpg'/> :
        <img 
        alt={profileImage.username} 
        src={profileImage.imageUrl} />
      }

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