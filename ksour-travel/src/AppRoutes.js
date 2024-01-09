import React from "react";
import { Route, Routes , Navigate } from "react-router-dom";
import Home from "./pages/user/Home";
import Airlines from "./pages/user/Airlines";
import Hotels from "./pages/user/Hotels";
import Ferries from "./pages/user/Ferries";
import Omra from "./pages/user/Omra";
import Contact from "./pages/user/Contact";
import Formulaire from "./pages/user/Formulaire";
import Login from "./pages/authentification/Login";
import Register from "./pages/authentification/Register";
import AdminRoutes from "./pages/admin/AdminRoutes"; // Import the AdminRoutes component
import AdminLogin from "./pages/authentification/AdminLogin";
import Profile from "./pages/authentification/profile";

const AppRoutes = () => {

  const PrivateRoute = ({ children}) => {
    const hasToken = !!localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    return (
      (hasToken && role === 'admin') ? children : <Navigate to='/adminLogin' replace />
    )
 }

 const UserRoute = ({ children}) => {
  const hasToken = !!localStorage.getItem('token');
  const role = localStorage.getItem('role');
  return (
    (hasToken === true) && (role ==="user") ? children : <Navigate to='/login' replace />
  )
}

 const AuthRoute = ({ children}) => {
  const hasToken = !!localStorage.getItem('token');
  return (
    hasToken === false ? children : <Navigate to='/'  />
  )
}


  return (
    <Routes>
         <Route path="/profile" element={<Profile />} />

      <Route path="/airlines" element={<Airlines />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/Ferries" element={<Ferries />} />
      <Route path="/omra" element={<Omra />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/airlines" element={<Airlines />} />
      <Route path="/formulaire" element={<UserRoute><Formulaire /></UserRoute>} />
      <Route path="/Login" element={<AuthRoute><Login /></AuthRoute>} />
      <Route path="/adminLogin" element={<AuthRoute><AdminLogin/></AuthRoute>} />
      <Route path="/Register" element={<AuthRoute><Register /></AuthRoute>} />
      <Route path="/admin/*" element={<PrivateRoute><AdminRoutes /></PrivateRoute>} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
