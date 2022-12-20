// import '../../App.css';
import "./styling/profile.css";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfilePic from "./ProfilePic";

const AdminPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`https://shopkeepapp.herokuapp.com/user/${username}`)
      .then((res) => setUser(res.data));
  }, []);

  if (!user) {
    return <p>loading</p>;
  }
  return (
    <>
      <div className="profile-pic-container">
        <ProfilePic
          userid={user._id}
          userFirstName={user.firstName}
          userEmail={user.email}
        />
      </div>
      <div className="admin-page-button-container">
        {!user.isAdmin ? (
          <nav>
            <Link id="admin-store-button" to="favorite">
              <span>Favorite</span>
            </Link>
          </nav>
        ) : (
          <nav className="admin-page-button">
            <Link
              className="admin-store-button"
              id="start-selling"
              to="setstore"
            >
              <span>Start Selling</span>
            </Link>
            <Link
              className="admin-store-button"
              id="store-front"
              to={`view-admin-store`}
            >
              <span>Store Front</span>
            </Link>
            <Link className="admin-store-button" id="favorite" to="favorite">
              <span>Favorite</span>
            </Link>
          </nav>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default AdminPage;
