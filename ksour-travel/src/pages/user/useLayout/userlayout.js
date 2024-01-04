import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <NavBar />
        {/* <div  className="child-contain"style={{ flex: 1 , position: 'center' }}> */}
        {children}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
