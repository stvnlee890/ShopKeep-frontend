
const Image = ({ imageUrl, handleDelete }) => {

  return (
    <div>
      <img alt={imageUrl.imageName} src={imageUrl.imageUrl} />
      <button onClick={handleDelete} id={imageUrl.imageKey}>delete</button>
    </div>
  )
}

export default Image;