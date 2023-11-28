import React, { Component } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import Book from "./baithi/Book.js";
import reportWebVitals from "./reportWebVitals";
// import MyAppWithProps from './component1/app';
// import RegistrationForm from './formlogin/formlogin';
// import Test1 from "./test/test1.js";
// import Book from "./baithi/Book.js";
// import QuadraticEquation from "./ptb2/ptb2.js";
import Dientich from "./dientich/dientichtamgiac.js";
// import Test2 from "./test/Test2.js";
const Student = (props) => {
  <div className="student">
    <h1> List of student</h1>
    <p> Name: {props.students.name}</p>
    <p>Email: {props.students.email}</p>
  </div>;
};
function App() {
  const students = { name: "Phi", email: "Phi@gmail.com" };
  return (
    <div className="Test5">
      <Student students={students} />
      <hr></hr>
      <Car></Car>
    </div>
  );
}

class Car extends Component {
  constructor() {
    super();
    this.state = {
      car: "Honda",
    };
  }
  changMessage() {
    this.setState({ car: "Toyota" });
  }
  render() {
    return (
      <div className="App">
        {/* read data thong qua state  */}
        <h1>{this.state.car}</h1>
        {/* write date thong qua state  */}
        <button onClick={() => this.changMessage()}>Change</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ComponentExample/> */}
    {/* <App></App> */}
    {/* <Login></Login> */}
    {/* <Test /> */}
    {/* <MyAppWithProps></MyAppWithProps> */}
    {/* <RegistrationForm></RegistrationForm> */}
    {/* <PT></PT> */}
    {/* <DT></DT> */}
    {/* <App1></App1> */}
    {/* <Form></Form> */}
    {/* <XmlHttpExample></XmlHttpExample> */}
    {/* <FetchExample></FetchExample> */}
    {/* <AxiosExample></AxiosExample> */}
    {/* <Book></Book> */}
    {/* <App></App> */}
    {/* <Test1></Test1> */}
    {/* <QuadraticEquation></QuadraticEquation> */}
    <Dientich></Dientich>
    {/* <Test2></Test2> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
