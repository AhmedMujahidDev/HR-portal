import React from "react";
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Page Content */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
