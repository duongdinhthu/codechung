import logo from "../logo.svg";
import "./App.css";
import Create from "./create";
import Read from "./read";
import Update from "./update";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App1() {
  return (
    <Router>
      <div className="main">
        <h1 className="main-header"> React CRUB Example</h1>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/read" component={Read} />
        </div>
        <Route path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App1;
