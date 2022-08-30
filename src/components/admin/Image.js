import './styling/uploadImages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Image = ({ imageUrl, handleDelete }) => {

  return (
    <div className='image-component'>
      <div className='image-container'>
        <img id='image-component-images'
        alt={imageUrl.imageName} 
        src={imageUrl.imageUrl} />
    
          {/* <button className='image-button'
          onClick={handleDelete} 
          id={imageUrl.imageKey}>
            remove
          </button> */}
          <FontAwesomeIcon icon={faTrashCan} className='image-button' onClick={handleDelete} 
          id={imageUrl.imageKey}/>
      </div>
 
    </div>
  )
}

export default Image;