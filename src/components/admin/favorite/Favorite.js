import '../styling/favorite.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Favorite = () => {
const { username } = useParams()
const [image, setImage] = useState([])
const navigate = useNavigate()


useEffect(() => {
  axios.get(`https://shopkeepapp.herokuapp.com/images/favorite/${username}` )
    .then((res) => setImage(res.data))
},[])
console.log(image)

const handleClick = (event) => {
  navigate(`/${event.target.id}`)
}
const handleDelete = (event) => {
    event.preventDefault()
    console.log(event.target.id)
    axios.delete(`https://shopkeepapp.herokuapp.com/favorite/${event.target.id}`)
      .then(() => {
        const newImage = image.filter(image => image._id !== event.target.id)
        setImage(newImage)  
      })
      .catch((err) => console.log(err))
  }

  
  return (
    <div className='favorite-container'>

      {image.map((image) => (
        !image ? <p>loading</p> : 
        <div className='favorite-image-container' key={image._id} >
          <img 
          className='favorite-image'
          onClick={handleClick}
          alt={'images'}
          id={image.storeFront} 
          src={image.imageUrl} />
          {/* <button
          id={image._id}
          onClick={handleDelete}
          >delete</button> */}
            <FontAwesomeIcon icon={faTrashCan} 
            id={image._id}
            onClick={handleDelete}
            className='favorite-delete-button'
            />
      </div>
      ))}
     
    </div>
  )
}

export default Favorite