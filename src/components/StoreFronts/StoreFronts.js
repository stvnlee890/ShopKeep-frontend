import "../home/home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const StoreFronts = ({ store }) => {
  const username = window.localStorage.getItem("user");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const favoriteForm = {
    username: username,
    storeFront: "",
  };
  // GET ALL STORE FRONTS
  useEffect(() => {
    axios
      .get(`https://shopkeepapp.herokuapp.com/images/${store._id}`)
      .then((res) => setImageUrl(res.data));
  }, []);

  const handleClick = (event) => {
    axios.post(`https://shopkeepapp.herokuapp.com/favorite`, {
      username: username,
      storeFront: event.target.id,
      imageKey: imageUrl[0].imageKey,
    });
  };
  if (!imageUrl) {
    return <p>LOADING</p>;
  }

  return (
    <div className="store-front homepage">
      <div className="home-images">
        {!imageUrl ? (
          console.log("loading")
        ) : (
          <img
            className="homepage-image"
            onClick={() => {
              navigate(`/${store._id}`);
            }}
            alt={imageUrl[0].imageKey}
            src={imageUrl[0].imageUrl}
          />
        )}
        <div id="store-front-details">
          <p className="homepage store-front price">USD ${store.price}</p>
          {/* <FontAwesomeIcon icon={faHeart} 
          className='homepage store-front price favorite'  
          id={store._id} 
          onClick={handleClick}/> */}
          <p
            className="homepage store-front price favorite"
            id={store._id}
            onClick={handleClick}
          >
            Favorite
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreFronts;

// GET REQUEST FOR STORE-FRONTS OF ALL USERS
// WHEN CLICK DIRECT THEM TO SPECIFIC USER STORE FRONT
//
