import { useState } from "react";
import Input from "../Input";
import validateEmail from "../utils";
export default function Test3() {
  const [email, setEmail] = useState({
    isTouched: false,
    isValid: false,
    value: "",
  });
  function handleEmailInput(e) {
    setEmail({
      value: e.target.value,
      isTouched: true,
      isValid: validateEmail(e.target.value),
    });
  }
  return (
    <div>
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
    </div>
  );
}
