
const ProfileImage = ({ imageUrl, handleDelete }) => {

  return (
    <div>
      <h1>image</h1>
      <img alt='profile' src={imageUrl.imageUrl}  />
      <button onClick={handleDelete} id={imageUrl.imageKey} >delete</button>
    </div>
  )
}

export default ProfileImage