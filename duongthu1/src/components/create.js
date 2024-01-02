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
      .post("https://658c1ca8859b3491d3f5813a.mockapi.io/api/ok/ok", {
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
