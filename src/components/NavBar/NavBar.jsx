import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <div>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="ulStyle">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default NavBar;
