import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-row gap-4">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
