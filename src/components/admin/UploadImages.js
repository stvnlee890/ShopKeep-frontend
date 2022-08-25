import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from './Image'
import { useParams, useNavigate } from 'react-router-dom'

const UploadImages = () => {
  const { storeid } = useParams()
  const [uploadImages, setUploadImages] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()
  const username = window.localStorage.getItem('user')

  const formData = new FormData()
    formData.append('image', uploadImages)
    formData.append('storeFront', storeid)

  const handleChange = (event) => {
    const files = event.target.files[0]
    setUploadImages(files)
  }
  console.log(uploadImages)

  const handleClick = () => {
    navigate(`/${username}/adminpage`)
  }
  // NEED TO SEND HEADERS OF STORE-FRONT ID TO POPULATE DATA
  // HEADERS: { storeFront: useParams() }


  useEffect(() => {
    axios.get(`http://localhost:8080/images/${storeid}` )
      .then((res) => setImageUrl(res.data))
  },[uploadImages])
  console.log(imageUrl)


  const handleSubmit = (event) => {
    if(!uploadImages){
      alert('please upload an image')
    } else {
      event.preventDefault()
      axios.post(`http://localhost:8080/images`, formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then((res) => {
        console.log(res.data)
        setUploadImages('')
      })
      .catch((err) => console.log(err))
    }
  }

  return (
    <div>
      <h1>Upload Images</h1>
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
      <div>
      {!imageUrl.length ? console.log('image loading') : imageUrl.map((images) => (
        <Image key={images._id} imageUrl={images} />
      )) }
      </div>
      <button type='submit' onClick={handleClick} >Finished</button>
    </div>
  )
}

export default UploadImages