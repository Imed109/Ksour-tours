import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../JS/usersSlice";
import UserLayout from "../user/useLayout/userlayout";
import "./authcss/profile.scss"; // Import your SCSS file for styling
import imageprofile from "../../assests/hero8.jpg";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser: userData, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log('efffffffffffffffffff', userId);
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <UserLayout>
      <div className="profile-container">
        <div className="user-info">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : userData ? (
            <>
              <h2>Salut! {userData.fullName}</h2>
              <p>Nom: {userData.fullName}</p>
              <p>Email: {userData.email}</p>
              <p>Age: {userData.age}</p>
              <p>Telephone: {userData.phone}</p>
         
              {/* Other user information */}
            </>
          ) : (
            <p>No user data found.</p>
          )}
        </div>
        <div className="user-picture">
          {/* Your picture component or placeholder */}
          <img src={imageprofile} alt="User" className="profile-image" />
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;
