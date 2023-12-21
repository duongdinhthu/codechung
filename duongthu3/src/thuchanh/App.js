import React from "react";
import Home from "./Home";
import Product from "./Product";
import Introduction from "./Introduction";
import Contact from "./Contact";
import Blog from "./Blog";
import Service from "./Service";
import Register from "./Register";
import Login from "./Login";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav className="Menu">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Product" style={{ textDecoration: "none" }}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/Introduction" style={{ textDecoration: "none" }}>
              Introduction
            </Link>
          </li>
          <li>
            <Link to="/Contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Blog" style={{ textDecoration: "none" }}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/Service" style={{ textDecoration: "none" }}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/Login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/Register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}
