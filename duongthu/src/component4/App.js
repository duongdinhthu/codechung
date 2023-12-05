import React, { Component } from "react";
import Home from "./home";
import About from "./about";
import Product from "./product";
import Contact from "./contact";
import Category from "./category";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

class App3 extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/product" element={<Product />}></Route>
            <Route exact path="/category" element={<Category />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App3;
