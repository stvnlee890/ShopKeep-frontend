import "../styling/favorite.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Favorite = () => {
  const { username } = useParams();
  const [image, setImage] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://shopkeepapp.herokuapp.com/images/favorite/${username}`)
      .then((res) => setImage(res.data));
  }, [deleted]);

  const handleClick = (event) => {
    navigate(`/${event.target.id}`);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`https://shopkeepapp.herokuapp.com/favorite/${event.target.id}`)
      .then((res) => {
        if (res.status === 200) {
          setDeleted(!deleted);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="favorite-container">
      {image.map((image) =>
        !image ? (
          <p>loading</p>
        ) : (
          <div className="favorite-image-container" key={image._id}>
            <img
              className="favorite-image"
              onClick={handleClick}
              alt={"images"}
              id={image.storeFront}
              src={image.imageUrl}
            />

            {/* <FontAwesomeIcon
              icon={faTrashCan}
              id={image._id}
              onClick={handleDelete}
              className="favorite-delete-button"
            /> */}
            <p
            id={image._id}
            onClick={handleDelete}
            className="favorite-delete-button"
            >Delete</p>
          </div>
        )
      )}
    </div>
  );
};

export default Favorite;
