import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
// import "../src/App.css";

import Home from "./Home";
import Aboutus from "./Aboutus";
import Register from "./Register";
// import "./main.css";
// import Home from "./component/home";
// import Product from "./component/product";

// import Category from "./component/category";
// import About from "./component/about";
// import Contact from "./component/contact";

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Register" element={<Register />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
