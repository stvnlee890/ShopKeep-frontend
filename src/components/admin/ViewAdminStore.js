import { useParams } from 'react-router-dom'

const ViewAdminStore = ({ owner, sellername, storeName, id }) => {
  const { username } = useParams()
  if(sellername === username) {
    console.log(owner)
  }
  return (
    <div>
      <h1>{storeName}</h1>
    </div>
  )
}

export default ViewAdminStore