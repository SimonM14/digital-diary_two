import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import EntriesPage from "./pages/EntriesPage";
import "./styles.css";
import { Navbar, NavbarBrand } from "react-bootstrap";
import About from "./pages/About";
import MainContent from "./components/Mainc";
import { Profile } from "./pages/Profile";


const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar>
          <NavbarBrand
            style={{ fontSize: 26, color: "red", fontStyle: "italic" }}
          >
            Mi-<t style={{ color: "black" }}>Thoughts</t>
          </NavbarBrand>
        </Navbar>
        <hr />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/main" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/entries" element={<EntriesPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
