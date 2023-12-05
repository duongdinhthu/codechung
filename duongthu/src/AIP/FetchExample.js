// các thao tác : GET , PUT, POST , DELETE
import React, { useState, useEffect } from "react";
//useEffect sử dụng cho bất đồng bộ của js
function FetchExample() {
  const [data, setData] = useState(null);
  useEffect(() => {
    //cấu trúc nguyên mẫu hàm effect gồm 2 hàm ,
    fetch("https://jsonplaceholder.typicode.com/users")
      //hàm fetch được sử dụng để gọi API và lấy dữ liệu từ đó
      .then((response) => response.json())
      //được sử dụng để xử lý kết quả trả về từ hàm fetch()
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, null);
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
}
export default FetchExample;
