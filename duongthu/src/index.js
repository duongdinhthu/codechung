import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Book from "./baithi/Book.js";
import reportWebVitals from "./reportWebVitals";
// import MyAppWithProps from './component1/app';
// import RegistrationForm from './formlogin/formlogin';
// import Test1 from "./test/test1.js";
// import QuadraticEquation from "./ptb2/ptb2.js";
import Dientich from "./dientich/dientichtamgiac.js";
import App1 from "./App1.js";
// import Test2 from "./test/Test2.js";
import Studen1 from "./Studen.js";
import Test3 from "./test/Test3.js";
import App from "./App.js";
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
    <Book></Book>
    {/* <App></App> */}
    {/* <Test1></Test1> */}
    {/* <QuadraticEquation></QuadraticEquation> */}
    {/* <Dientich></Dientich> */}
    {/* <Test2></Test2> */}
    {/* <App1></App1> */}
    {/* <Studen1></Studen1> */}
    {/* <App /> */}
    {/* <Test3></Test3> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
