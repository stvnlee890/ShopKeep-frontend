import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProfileImage from './ProfileImage'

const UploadProfileImage = () => {
const { userid } = useParams()
const [uploadImages, setUploadImages] = useState('')
const [imageUrl, setImageUrl] = useState('')

  const formData = new FormData()
    formData.append('image', uploadImages)
    formData.append('userProfile', userid)

   
    console.log(imageUrl.imageUrl)
    
    const handleChange = (event) => {
      const files = event.target.files[0]
      setUploadImages(files)
    }
    console.log(imageUrl)

    useEffect(() => {
        axios.get(`http://localhost:8080/images/profile-image/${userid}` )
        .then((res) => setImageUrl(res.data))
    },[uploadImages])
    
    const handleSubmit = (event) => {
      if(!uploadImages){
        alert('please upload an image')
      } else {
        event.preventDefault()
        axios.post(`http://localhost:8080/images/profile-image`, formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(() => {
          setUploadImages('')
        })
        .catch((err) => console.log(err))
      }
    }

    const handleDelete = (event) => {
      event.preventDefault()
      const imageKey = event.target.id
      console.log(imageKey)
      axios.delete(`http://localhost:8080/images/${imageKey}`)
        .then(() => {
          const newImageUrl = imageUrl.filter(image => image.imageKey !== imageKey)
          console.log(newImageUrl)
          setImageUrl(newImageUrl)  
        })
        .catch((err) => console.log(err))
    }
  if(!imageUrl) {
    return (
      <p>loading</p>
    )
  }

  return (
    <div>
      <h1>Upload Profile Picture</h1>
      <form onSubmit={handleSubmit} >
        <input 
          onChange={handleChange}
          type='file'
          id='image'
          accept='image/*'
        >
        </input>
        <button type='submit'>Submit</button>
      </form>
      {!imageUrl.length ? null : 
      imageUrl.map((images) => (
        <ProfileImage
          key={images._id} 
          imageUrl={images} 
          id={images.imageKey} 
          handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default UploadProfileImage