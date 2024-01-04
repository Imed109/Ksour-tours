import React from "react";
import { Route, Routes } from "react-router-dom";
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/airlines" element={<Airlines />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/Ferries" element={<Ferries />} />
      <Route path="/omra" element={<Omra />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/airlines" element={<Airlines />} />
      <Route path="/formulaire" element={<Formulaire />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
