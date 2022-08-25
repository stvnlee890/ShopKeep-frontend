
const ViewAdminStore = ({ owner, sellerid, storeName }) => {
  if(owner = sellerid){
    console.log(owner)
  }
  return (
    <div>
      <h1>{storeName}</h1>
    </div>
  )
}

export default ViewAdminStore