import axios from "axios";
import { useEffect, useState } from "react";

const StoreFrontSellerPic = ({ user }) => {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    axios
      .get(`https://shopkeepapp.herokuapp.com/images/profile-image/${user}`)
      .then((res) => setProfileImage(res.data));
  }, []);

  return (
    <div>
      {!profileImage.length ? (
        <img
          className="profile-image"
          alt={profileImage.username}
          src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bottle-green-solid-color-background.jpg"
        />
      ) : (
        <img
          className="profile-image"
          alt={profileImage.username}
          src={profileImage[0].imageUrl}
        />
      )}
    </div>
  );
};

export default StoreFrontSellerPic;
