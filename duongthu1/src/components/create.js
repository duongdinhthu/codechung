import React, { useState } from "react";
import { Button, Checkbox, Form, Label } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

function Create() {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  console.log(firstName);
  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkBox);
    axios
      .post("https://656ef4286529ec1c623703c2.mockapi.io/api/v1/ok", {
        firstName,
        lastName,
        checkBox,
      })
      .then(() => {
        history.push("/Create");
      });
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <Label>First Name</Label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Label>Last Name</Label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Tôi đồng ý với các điều khoản"
          onChange={(e) => setCheckBox(!checkBox)}
        />
      </Form.Field>
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default Create;
