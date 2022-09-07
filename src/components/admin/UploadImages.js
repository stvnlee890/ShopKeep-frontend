import './styling/uploadImages.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from './Image'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
 
const UploadImages = () => {
  const { storeid } = useParams()
  const [uploadImages, setUploadImages] = useState()
  const [imageUrl, setImageUrl] = useState('')
  const [upload, setUpload] = useState(false)
  const navigate = useNavigate()
  const username = window.localStorage.getItem('user')

  const formData = new FormData()
    formData.append('image', uploadImages)
    formData.append('storeFront', storeid)

  // HANDLES UPLOAD IMAGES
  const handleChange = (event) => {
    const files = event.target.files[0]
    setUploadImages(files)
  }

  // SUBMITS FORM
  const handleSubmit = (event) => {
    if(!uploadImages){
      alert('please upload an image')
    } else {
      event.preventDefault()
      axios.post(`https://shopkeepapp.herokuapp.com/images`, formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(() => {
        setUploadImages('')
      })
      .catch((err) => console.log(err))
    }
  }
  console.log(upload)
  // GET IMAGES
  useEffect(() => {
    axios.get(`https://shopkeepapp.herokuapp.com/images/${storeid}` )
    .then((res) => {
      setImageUrl(res.data)
    })
  },[uploadImages])
  console.log(upload)
  // DELETES IMAGE
  const handleDelete = (event) => {
    event.preventDefault()
    const imageKey = event.target.id
    axios.delete(`https://shopkeepapp.herokuapp.com/images/${imageKey}`)
      .then(() => {
        const newImageUrl = imageUrl.filter(image => image.imageKey !== imageKey)
    
        setImageUrl(newImageUrl)  
      })
      .catch((err) => console.log(err))
  }

  // NAVIGATES USER TO ADMIN PAGE AFTER FINISHING THEIR EDIT
  const handleClick = () => {
    if(imageUrl.length === 0){
      alert('please upload images')
    } else {
      navigate(`/${username}/adminpage`)
    }
  }
console.log(imageUrl)

const changeStateTrue = () => {
  setUpload(true)
}
const changeStateFalse = () => {
  setUpload(false)
}
  
  return (
    <div className='upload-images-container'>
      <h2 id='upload-image-text'>Upload your images</h2>
      <p className='steps'>Step 2 of 2</p>
      
      <form onSubmit={handleSubmit}>

        <div className='upload-images-input-container'>
  
          <label onClick={changeStateTrue} htmlFor='image' className='upload-images-label'><FontAwesomeIcon id='image-icon' icon={faImage} /></label>
          <input className='upload-images-input'
            onChange={handleChange}
            name='file'
            type='file'
            id='image'
            accept='image/*'
          >
          </input>
          <div id='upload-image-button-container'>
            <button onClick={changeStateFalse} id='upload-image-button'type='submit'>Submit</button>
          </div>
        </div>

      </form>
    <div className='image-component-images-container'>
      {!imageUrl.length ? console.log('image loading') : imageUrl.map((images) => (
        <Image 
          key={images._id} 
          imageUrl={images} 
          id={images.imageKey} 
          handleDelete={handleDelete} />
      ))}
    </div>
    <div className='finished-button-container'>
      <button id='finished-button' type='submit' onClick={handleClick}>Finished </button> 
    </div>
    </div>
  )
}

export default UploadImages