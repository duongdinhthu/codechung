import React, { useState } from "react";
//READ
function XmlHttpExample() {
  const [data, setData] = useState(null);
  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    // G;et là đọc API , url của API
    xhr.onload = function () {
      // mỗi khi load trang sẽ gọi 1 hàm
      // mỗi khi thành công thì code status = 200 là thành công
      if (xhr.status === 200) setData(JSON.parse(xhr.responseText));
      // kiểm tra xhr = 200 hay không .
      // nếu bằng 200 thì gán cho data là kết quả trả về của file json
    };
    xhr.send();
    //gửi dữ liệu đi lên sver
  }
  return (
    <div>
      <button onClick={handleClick}>Get API Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Data loading ...</div>}
    </div>
  );
}
export default XmlHttpExample;
