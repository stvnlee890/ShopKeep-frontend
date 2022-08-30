import axios from 'axios'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ViewAdminStore = ({ storeName, id, price, handleDelete }) => {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    axios.get(`https://shopkeepapp.herokuapp.com/images/${id}` )
      .then((res) => setImageUrl(res.data))
  },[])

  return (
    <>
    <div className='admin-store-front'>
      <h3>{storeName}</h3>
      {!imageUrl ? console.log('loading') : 
      <img 
        alt={imageUrl[0].imageKey} 
        src={imageUrl[0].imageUrl}/>}
      <div id='view-store-details'>
        <p id='view-store-price'>{`$${price}`}</p>
        <div id='admin-store-delete-button-container'>
          {/* <FontAwesomeIcon icon={faTrashCan} 
            className='admin-store-delete-button'
            id={id} 
            onClick={handleDelete} 
            /> */}
        <button 
          onClick={handleDelete} 
          className='admin-store-delete-button'
          id={id}><FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>

      </div>
    </div>
    </>
  )
}

export default ViewAdminStore