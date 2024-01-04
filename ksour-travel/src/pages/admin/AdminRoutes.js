// AdminRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminAirlines from "./adminAirlines";
import AdminHotels from "./adminHotels";
import AdminFerries from "./adminFerries";
import AdminOmra from "./adminOmra";
import Users from "./Users";
import DashBoard from "./dashBoard";
// import AdminDashboard from "./pages/admin/AdminDashboard"; // If needed

const AdminRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<AdminDashboard />} /> */}
      <Route path="/airlines" element={<AdminAirlines />} />
      <Route path="/hotels" element={<AdminHotels />} />
      <Route path="/ferries" element={<AdminFerries />} />
      <Route path="/omra" element={<AdminOmra />} />
      <Route path="/users" element={<Users />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default AdminRoutes;
