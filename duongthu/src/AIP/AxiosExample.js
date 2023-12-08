import React, { useState, useEffect } from "react";
import axios from "axios";
//axios dùng cho các thao tác : GET,PUT,POST,DELETE
function AxiosExample() {
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
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          Họ:{data.firstName}----Tên:{data.lastName}-----{data.checkbox}
        </li>
      ))}
    </ul>
  );
}
export default AxiosExample;
