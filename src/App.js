import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import EntriesPage from "./components/EntriesPage";
import "./styles.css";
import {  Navbar, NavbarBrand } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Navbar>
        <NavbarBrand style={{ fontSize: 23, color: "red" }}>
          Mi-<t style={{ color: "white" }}>Thoughts</t>
        </NavbarBrand>
        <nav className="nav">
          <Link to="/" style={{}}>Home</Link>
          <Link to="/entries">Entries</Link>
          <Link to="/About">About</Link>
        </nav>
      </Navbar>
      <hr />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/entries" element={<EntriesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
