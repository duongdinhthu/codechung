import React from "react";
import Home from "./Home";
import Register from "./Register";
import About from "./About";
import "./App.css";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
export default function App4() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
