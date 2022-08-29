import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Favorite = () => {
const { username } = useParams()
const [image, setImage] = useState([])
const navigate = useNavigate()

useEffect(() => {
  axios.get(`http://localhost:8080/images/favorite/${username}` )
    .then((res) => setImage(res.data))
},[])
console.log(image)

const handleClick = (event) => {
  navigate(`/${event.target.id}`)
}
const handleDelete = (event) => {
    event.preventDefault()
    console.log(event.target.id)
    axios.delete(`http://localhost:8080/favorite/${event.target.id}`)
      .then(() => {
        const newImage = image.filter(image => image._id !== event.target.id)
        setImage(newImage)  
      })
      .catch((err) => console.log(err))
  }

  
  return (
    <div>
      <h3>
        favorite
      </h3>

      {image.map((image) => (
        !image ? <p>loading</p> : 
        <div>

        <img 
        onClick={handleClick}
        key={image._id} 
        alt={'images'}
        id={image.storeFront} 
        src={image.imageUrl} />
        <button
        id={image._id}
        onClick={handleDelete}
        >delete</button>
      </div>
      ))}
     
    </div>
  )
}

export default Favorite