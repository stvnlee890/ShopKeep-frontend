import "./styling/store-front.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StoreImages = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { storeid } = useParams();

  useEffect(() => {
    axios
      .get(`https://shopkeepapp.herokuapp.com/images/${storeid}`)
      .then((res) => setImageUrl(res.data));
  }, []);

  return (
    <div className="store-front-details-container">
      {!imageUrl
        ? <p>LOADING</p>
        : imageUrl.map((images) => (
            <div key={images.imageKey} id="store-front-details-images">
              <img
                id="store-front-images"
                alt={images.imageKey}
                src={images.imageUrl}
              />
            </div>
          ))}
    </div>
  );
};

export default StoreImages;
