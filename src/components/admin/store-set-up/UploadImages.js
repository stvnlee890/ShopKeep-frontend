import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from './Image'

const UploadImages = () => {
  const [uploadImages, setUploadImages] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const formData = new FormData()
    formData.append('image', uploadImages)

  const handleChange = (event) => {
    const files = event.target.files[0]
    setUploadImages(files)
  }
  console.log(uploadImages)

  // NEED TO SEND HEADERS OF STORE-FRONT ID TO POPULATE DATA
  // HEADERS: { storeFront: useParams() }
  useEffect(() => {
    axios.get(`http://localhost:8080/images`)
      .then((res) => setImageUrl(res.data))
  },[uploadImages])

  const handleSubmit = (event) => {
    if(!uploadImages){
      alert('please upload an image')
    } else {
      event.preventDefault()
      axios.post('http://localhost:8080/images', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(() => {
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
    </div>
  )
}

export default UploadImages