import "./styling/adminStoreFront.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewAdminStore from "./ViewAdminStore";

const AdminStoreFronts = () => {
  const [storeFront, setStoreFront] = useState("");
  const { username } = useParams();

  // FETCH STORE-FRONTS
  useEffect(() => {
    axios
      .get(`https://shopkeepapp.herokuapp.com/store-front/${username}`)
      .then((res) => setStoreFront(res.data));
  }, []);

  // DELETE STOREFRONT AND ALL IMAGES ASSOCIATED TO THE STORE FRONT
  const handleDelete = (event) => {
    event.preventDefault();
    const imageKey = event.target.id;
    axios
      .delete(
        `https://shopkeepapp.herokuapp.com/images/store-front/${imageKey}`
      )
      .then((res) => {
        const newStoreFront = storeFront.filter(
          (storeFront) => storeFront._id !== imageKey
        );
        setStoreFront(newStoreFront);
      })
      .catch((err) => console.log(err));
  };
  if (!storeFront) {
    return <p>No store front</p>;
  }
  if (storeFront) {
    return (
      <div className="admin-store-container">
        {storeFront.map((stores) => (
          <ViewAdminStore
            key={stores._id}
            owner={stores.owner}
            sellername={username}
            storeName={stores.storeName}
            price={stores.price}
            handleDelete={handleDelete}
            id={stores._id}
          />
        ))}
      </div>
    );
  }
};

export default AdminStoreFronts;
