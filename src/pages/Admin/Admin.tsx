// import React from 'react'

import { Outlet } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout/AdminLayout";

const Admin = () => {
  return (
    <AdminLayout>
      <div className="w-full min-h-screen  bg-[#f0f7ff]">
        <Outlet />
      </div>
    </AdminLayout>
  );
};

export default Admin;
