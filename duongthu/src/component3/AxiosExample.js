import React, { useState, useEffect } from "react";
import axios from "axios";
//axios dùng cho các thao tác : GET,PUT,POST,DELETE
function AxiosExample() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://65617ceddcd355c08323db8b.mockapi.io/api/v9/FakeData")
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
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
}
export default AxiosExample;
