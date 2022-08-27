import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const StoreFrontSellerPic = ({ user }) => {
  const [profileImage, setProfileImage] = useState('')
  console.log(profileImage)


  
  useEffect(() => {
    axios.get(`http://localhost:8080/images/profile-image/${user}` )
    .then((res) => setProfileImage(res.data))
  },[])
  
console.log(profileImage)
  return (
    <div>
      <h2>ProfilePic</h2>
      {!profileImage.length ? 
      <img
        className='profile-image' 
        alt={profileImage.username} 
        src='https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bottle-green-solid-color-background.jpg'/> :
      <img 
        className='profile-image' 
        alt={profileImage.username} 
        src={profileImage[0].imageUrl} />
      } 
     
    </div>
  )
}

export default StoreFrontSellerPic