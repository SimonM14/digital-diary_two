// src/MainContent.js
import React from "react";
import Sidebar from "./SideBar";

const MainContent = () => {
  return (
    <div className="main-content">
      <Sidebar />
      <h1>Welcome to the Dashboard</h1>
      <p>This is the main content area.</p>
    </div>
  );
};

export default MainContent;
