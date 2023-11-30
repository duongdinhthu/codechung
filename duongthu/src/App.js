import "./mau/style.css";
import { useState } from "react";
import Input from "./mau/Input";
import Button from "./mau/Button";
import validateEmail from "./mau/utils";

function App() {
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
    isValid: false,
  });
  const [pwd, setPwd] = useState({
    value: "",
    isTouched: false,
    isValid: false,
  });
  const [confirmPwd, setConfirmPwd] = useState({
    value: "",
    isTouched: false,
    isValid: false,
  });

  function handleEmailInput(e) {
    setEmail({
      isTouched: true,
      value: e.target.value,
      isValid: validateEmail(e.target.value),
    });
  }
  function handlePwdInput(e) {
    setPwd({
      isTouched: false,
      value: e.target.value,
      isValid: e.target.value === pwd.value ? true : false,
    });
  }
  function handleConfirmPwdInput(e) {
    setConfirmPwd({
      isTouched: true,
      value: e.target.value,
      isValid: e.target.value === pwd.value ? true : false,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    window.alert(
      `Submitted: \n Email: ${email.value} \n Password: ${pwd.value}`
    );
  }
  const formIsValid = email.isValid && pwd.isValid && confirmPwd.isValid;
  return (
    <div className="App">
      <Input
        name="email"
        type="text"
        label="Email"
        onChange={handleEmailInput}
        isValid={email.isValid}
        isTouched={email.isTouched}
        placeholder="Email..."
        value={email.value}
        errorMsg="Enter avalid email"
      />
      <Input
        name="password"
        type="password"
        label="Email"
        onChange={handlePwdInput}
        isValid={pwd.isValid}
        isTouched={pwd.isTouched}
        placeholder="Password..."
        value={pwd.value}
        errorMsg="Minimum 6 characters"
      />
      <Input
        name="confirmPwd"
        type="password"
        label="Confirm Password"
        onChange={handleConfirmPwdInput}
        isValid={confirmPwd.isValid}
        isTouched={confirmPwd.isTouched}
        placeholder="Confirm password ..."
        value={confirmPwd.value}
        errorMsg="Password do not match!"
      />
      <Button text="REGISTER" onClick={handleSubmit} disable={!formIsValid} />
    </div>
  );
}
export default App;
