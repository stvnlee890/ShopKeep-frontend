import '../home/home.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const StoreImages = () => {
  const [imageUrl, setImageUrl] = useState('')
  const { storeid } = useParams()
  
  useEffect(() => {
    axios.get(`http://localhost:8080/images/${storeid}`)
      .then((res) => setImageUrl(res.data))
  },[])

  return (
    <div>
      {!imageUrl ? console.log('loading') :
      imageUrl.map((images) => (
        <img 
        key={images.imageKey} 
        alt={images.imageKey} 
        src={images.imageUrl} />
      ))
      }
    </div>
  )
}

export default StoreImages