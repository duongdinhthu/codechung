import React from "react";
import Home from "./Home";
import Register from "./Register";
import About from "./About";
import "./App.css";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
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
        <Switch>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Switch>
      </div>
    </Router>
  );
}
