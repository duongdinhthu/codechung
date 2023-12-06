import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="wrapper">
      <div className="product">
        <h4 className="text1">
          Product<input type="text" className="input1"></input>
        </h4>
      </div>
      <div className="name">
        <h4>
          name <input type="text"></input>
        </h4>
      </div>
      <div className="phone">
        <h4>
          {" "}
          Phone number <input type="number"></input>
        </h4>
      </div>
      <div className="email">
        <h4>
          {" "}
          Email<input type="text"></input>
        </h4>
      </div>
      <div className="button">
        <button className="button1">Register</button>
        <button className="button2">Cancer</button>
      </div>
    </div>
  );
}
