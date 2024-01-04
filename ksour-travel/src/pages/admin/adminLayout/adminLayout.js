import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/SideBar';
const AdminLayout = ({ children }) => {
    return (
      <div>
        <Header />
        <div style={{ display: 'flex'}}>

          <Sidebar />
          <div  className="child-contain"style={{ flex: 1 , position: 'center' }}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default AdminLayout;