import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import EntriesPage from "./pages/EntriesPage";
import "./styles.css";
import { Navbar, NavbarBrand } from "react-bootstrap";
import About from "./pages/About";
import MainContent from "./components/Mainc";

const App = () => {
  return (
    <div className="">
    <Router>
      <Navbar>
        <NavbarBrand style={{ fontSize: 26, color: "red", fontStyle: "italic" }}>
          Mi-<t style={{ color: "black" }}>Thoughts</t>
        </NavbarBrand>
        <nav className="nav">
          <Link to="/" style={{}}>
            Home
          </Link>
          <Link to="/entries">Entries</Link>
          <Link to="/About">About</Link>
        </nav>
      </Navbar>
      <hr />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/entries" element={<EntriesPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/main" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
