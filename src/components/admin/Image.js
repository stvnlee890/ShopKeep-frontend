import axios from "axios"
import { useEffect, useState } from 'react'
import UploadImages from "./UploadImages"

const Image = ({ imageUrl, handleDelete }) => {


  return (
    <div>
      <img alt={imageUrl.imageName} src={imageUrl.imageUrl} />
      <button onClick={handleDelete} id={imageUrl.imageKey}>delete</button>
    </div>
  )
}

export default Image;