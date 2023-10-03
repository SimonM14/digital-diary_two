// src/MainContent.js
import React from "react";
import Sidebar from "./SideBar";

const MainContent = () => {
  return (
    <div className="main-content">
      <Sidebar />
      <h1 style={{ textAlign: "center" }}>Welcome to the Dashboard</h1>
      <p style={{ justifyContent: "right" }}>This is the main content area.</p>
    </div>
  );
};

export default MainContent;
