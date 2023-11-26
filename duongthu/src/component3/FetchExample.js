// các thao tác : GET , PUT, POST , DELETE
import React, { useState, useEffect } from "react";
//useEffect sử dụng cho bất đồng bộ của js
function FetchExample() {
  const [data, setData] = useState(null);
  useEffect(() => {
    //cấu trúc nguyên mẫu hàm effect gồm 2 hàm ,
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, null);
  return (
    <div>
      {data ? <pre> {JSON.stringify(data, null, 2)}</pre> : "Data loading..."}
    </div>
  );
}
export default FetchExample;
