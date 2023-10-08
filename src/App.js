import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import EntriesPage from "./pages/EntriesPage";
import "./styles.css";
import { Navbar, NavbarBrand } from "react-bootstrap";
import About from "./pages/About";
import MainContent from "./components/Mainc";
import { Profile } from "./pages/Profile";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar>
          <NavbarBrand
            style={{
              fontSize: 20,
              color: "red",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Mi-<t style={{ color: "black" }}>Thoughts</t>
          </NavbarBrand>
        </Navbar>

        <div >
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/main" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/entries" element={<EntriesPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
