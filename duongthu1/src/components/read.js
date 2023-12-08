import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
//axios dùng cho các thao tác : GET,PUT,POST,DELETE
function Read() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://656ef4286529ec1c623703c2.mockapi.io/api/v1/ok")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const getData = () => {
    axios
      .get("https://656ef4286529ec1c623703c2.mockapi.io/api/v1/ok")
      .then(() => {});
    console.log("ok");
  };
  const onDelete = (id) => {
    axios
      .delete("https://656ef4286529ec1c623703c2.mockapi.io/api/v1/ok/{id}")
      .then(() => {
        getData();
        console.log("Xóa thành công");
      });
  };
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Check Box</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checBox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>DELETE</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
export default Read;
