import './styling/uploadImages.css'

const Image = ({ imageUrl, handleDelete }) => {

  return (
    <div className='image-component'>
      <img id='image-component-images'
      alt={imageUrl.imageName} 
      src={imageUrl.imageUrl} />
      <div id='image-component-button' >
        <button className='image-button'
        onClick={handleDelete} 
        id={imageUrl.imageKey}>
          remove
        </button>
      </div>
    </div>
  )
}

export default Image;