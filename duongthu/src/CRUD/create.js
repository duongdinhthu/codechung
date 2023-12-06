import React, { useState } from "react";
import axios from "axios";

import { Button, Checkbox, Form } from "semantic-ui-react";
export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkBox);
    // axios.post("https://656ef4286529ec1c623703c2.mockapi.io/api/v1/ok",{firstName,lastName,checkBox}).then
  };
  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </Form.Field>
      <Form.Field>
        <Checkbox
          className="checkbox"
          onChange={(e) => setCheckBox(!checkBox)}
          label="Tôi đồng ý với các điều khoản"
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
}
