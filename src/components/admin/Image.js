const Image = ({ imageUrl }) => {

  return (
    <div>
      <img alt={imageUrl.imageName} src={imageUrl.imageUrl} />
    </div>
  )
}

export default Image;