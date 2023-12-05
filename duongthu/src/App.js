import React, { Component } from "react";
import Home from "./component4/home";
import About from "./component4/about";
import Product from "./component4/product";
import Contact from "./component4/contact";
import Category from "./component4/category";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

class App extends Component {
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
export default App;
