import '../home/home.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const StoreImages = () => {
  const [imageUrl, setImageUrl] = useState('')
  const { storeid } = useParams()
  
  useEffect(() => {
    axios.get(`https://git.heroku.com/shopkeepapp.git/images/${storeid}`)
      .then((res) => setImageUrl(res.data))
  },[])

  return (
    <div className='store-front-details-container'>
      {!imageUrl ? console.log('loading') :
      imageUrl.map((images) => (
        <img id='store-front-details-images'
        key={images.imageKey} 
        alt={images.imageKey} 
        src={images.imageUrl} />
      ))
      }
    </div>
  )
}

export default StoreImages