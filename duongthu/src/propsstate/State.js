import React, { Component } from "react";
class TestComponent extends React.Component {
  //kế thừa toàn bộ lớp react.component
  render() {
    return <div>Hello TestComponent </div>;
  }
}
const TestComponent = () => console.log("Hello Test Component");
// export default TestComponent;
// State:
// Được coi là biến trong chương trình  =(Variable)
// trong chương trình và không thể được sửa từ bên ngoài Component
// Chỉ được sử dụng bên trong Component và để truy cập và gọi trong conponent chúng ta sử dụng là /\useState
// this.useState , nó có thể là biểu thực bất đồng bộ (asynchronous) .
// có thể sửa
//state chỉ dùng được với state component và class component
// State: cả đọc và ghi

// props:
// cho phép sử dụng props để truyeefn thông tin từ component này sang component khác
//(property)
// sử dụng bên trong component.
// props không thể sửa
//có thể dùng với state
//Props là read - only : chỉ đọc
