import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProfilePic = ({ handleClick, userid }) => {
  const [profileImage, setProfileImage] = useState('')
  console.log(profileImage)
  useEffect(() => {
    axios.get(`http://localhost:8080/images/profile-image/${userid}` )
    .then((res) => setProfileImage(res.data))
  },[])


  return (
    <div>
      <h2>ProfilePic</h2>
      {!profileImage ? 
  
      <img onClick={handleClick}
        className='profile-image' 
        alt='default Image' 
        src='https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bottle-green-solid-color-background.jpg'/> :
      <img 
        className='profile-image' 
        alt={profileImage.username} 
        src={profileImage[0].imageUrl} />
}
    </div>
  )
}

export default ProfilePic