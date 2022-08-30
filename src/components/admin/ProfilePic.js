import './styling/profile.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePic = ({ userid, userFirstName, userEmail }) => {
  const [profileImage, setProfileImage] = useState('')
  const navigate = useNavigate()
  console.log(profileImage)

  useEffect(() => {
    axios.get(`https://shopkeepapp.herokuapp.com/images/profile-image/${userid}` )
    .then((res) => setProfileImage(res.data))
  },[])

  const handleClick = () => {
    navigate(`/profile-image/${userid}`)
  }
  console.log(userid)
  return (
    <div className='profile' >
      {!profileImage.length ? 
      <img onClick={handleClick}
        className='profile-image' 
        alt={profileImage.username} 
        src='https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bottle-green-solid-color-background.jpg'/> :
      <img onClick={handleClick}
        className='profile-image' 
        alt={profileImage.username} 
        src={profileImage[0].imageUrl} />
      }
      <p id='profile-first-name'>{userFirstName}</p>
      <p id='profile-email'>{userEmail}</p>
    </div>
  )
}

export default ProfilePic