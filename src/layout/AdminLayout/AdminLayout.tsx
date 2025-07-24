// import React from 'react'

import Sidebar from "../../components/Sidebar/Sidebar";

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <div className="w-2/10">
        <Sidebar />
      </div>
      <div className="w-8/10">{children}</div>
    </div>
  );
};

export default AdminLayout;
