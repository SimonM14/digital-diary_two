import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import EntriesPage from "./components/EntriesPage";
import "./styles.css";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Navbar bg="light">
        <NavbarBrand style={{fontSize:23, color: "red"}}>Mi-<t style={{color: "black"}}>Thoughts</t></NavbarBrand>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/entries">Entries</Link>
        </Nav>
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
