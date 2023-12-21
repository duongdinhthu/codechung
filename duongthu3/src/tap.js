import React from "react";
import "./tap.css";
export default function LienHe() {
  return (
    <div className="wrapper">
      <h1>Liên hệ</h1>
      <div className="header">
        <div className="header1">
          <p>
            Địa chỉ: số 80 Nguyễn Hữu Huân,Phường Lý Thái Tổ,Quận Hoàn Kiếm , Hà
            Nội{" "}
          </p>
          <p>Email:contact@dalhyebeauty.vn</p>
          <p>Hotline: 024 6680 9066</p>
          <p>Website: http://dailhyebeauty.vn</p>
        </div>
        <form className="header2">
          <input placeholder="Họ tên"></input>
          <input placeholder="Địa chỉ"></input>
          <input placeholder="Số Điện thoại "></input>
          <input placeholder="Email"></input>
          <input className="input" placeholder="Nội dung" />
        </form>
      </div>
    </div>
  );
}
