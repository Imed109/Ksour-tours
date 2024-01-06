import React from 'react';
import Sidebar from '../../../components/SideBar';
const AdminLayout = ({ children }) => {
    return (
      <div>
        
        <div style={{ display: 'flex'}}>

          <Sidebar />
          <div  className="child-contain"style={{ flex: 1 , position: 'center' }}>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminLayout;