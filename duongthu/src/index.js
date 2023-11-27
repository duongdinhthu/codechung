import React, { Component } from "react";

// import { ReactPropTypes } from 'react;
// import PropTypes from 'prop-types'
// import PropTypes from 'prop-types'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Form from "./formdangki/form.js";
import reportWebVitals from "./reportWebVitals";
// import MyAppWithProps from './component1/app';
// import RegistrationForm from './formlogin/formlogin';
import PT from "./ptb2/ptb2";
import DT from "./dientich/dientichtamgiac";
import App1 from "./component2/App.jsx";
// import XmlHttpExample from "./component3/XmlHttpRequestExample.js";
import FetchExample from "./component3/FetchExample.js";
import AxiosExample from "./component3/AxiosExample.js";
import Test from "./test/test1.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ComponentExample/> */}
    {/* <App></App> */}
    {/* <Login></Login> */}
    <Test />
    {/* <MyAppWithProps></MyAppWithProps> */}
    {/* <RegistrationForm></RegistrationForm> */}
    {/* <PT></PT> */}
    {/* <DT></DT> */}
    {/* <App1></App1> */}
    {/* <Form></Form> */}
    {/* <XmlHttpExample></XmlHttpExample> */}
    {/* <FetchExample></FetchExample> */}
    {/* <AxiosExample></AxiosExample> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
