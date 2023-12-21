import { type } from "@testing-library/user-event/dist/type";
import "./Register.css";
import React, { useState } from "react";

function Register() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((values) => ({ ...values, [name]: value }));
    type;
  };
  const isDisabled = !values.firstName || !values.lastName || !values.email;

  return (
    <div className="body">
      <div className="wrapper">
        <div className="header1"></div>
        <div className="header2"></div>
        <div className="header3"></div>
        <div className="header4"></div>
        <form onSubmit={handleSubmit} className="register-form">
          {submitted && valid && (
            <div className="success-message">
              <h2>
                {""}
                Welcome , {values.firstName}
              </h2>
              <div>
                {" "}
                your registrationform was successfull, Please check your email__
                {values.email}__ to confirm
              </div>
              <button className="button1">Continue</button>
            </div>
          )}
          {!valid && (
            <input
              className="form-group"
              type="text"
              placeholder="User"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          )}
          {submitted && !values.firstName && <span>Please enter the User</span>}
          {!valid && (
            <input
              className="form-group1"
              type="password"
              placeholder="Password"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
          )}
          {submitted && !values.lastName && (
            <span>Please enter the Password</span>
          )}
          {!valid && (
            <input
              className="form-group2"
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          )}
          {submitted && !values.email && <span>Please enter the email</span>}
          <button type="submit" className="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
