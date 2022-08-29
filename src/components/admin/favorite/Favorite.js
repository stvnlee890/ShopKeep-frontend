import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Favorite = () => {
const { username } = useParams()
const [storeid, setStoreid] = useState([])
const [image, setImage] = useState([])

useEffect(() => {
  axios.get(`http://localhost:8080/images/favorite/${username}` )
    .then((res) => setImage(res.data))
},[])
console.log(image)

  
  return (
    <div>
      <h3>
        favorite
      </h3>
      {image.map((image) => (
        !image ? <p>loading</p> : <img src={image.imageUrl} />
      ))}
       {/* {!image ? <p>loading</p> : <img src={image.imageUrl} />} */}
    </div>
  )
}

export default Favorite