import React from "react";

import "./Lienhe.css";
function LienHe() {
  return (
    <div className="wrapper">
      <h1 className="header">Liên Hệ</h1>
      <div className="header2">
        <div className="contact">
          <p>
            Địa chỉ: số 80 Nguyễn Hữu Huân, Phường Lý Thái Tổ, Quận Hoàn kiếm,
            Hà Nội
          </p>
          <p>Email: contact@dalhyebeauty.vn</p>
          <p>Hotline: 024 6680 9066</p>
          <p>Website: https://dalhyebeauty.vn</p>
        </div>
        <div>
          <form className="form">
            <input placeholder="Họ tên" className="inp1"></input>
            <input placeholder="Số điện thoại" className="inp2"></input>
            <input placeholder="Địa chỉ" className="inp3"></input>
            <input placeholder="Email" className="inp4"></input>
            <input placeholder="Chủ đề" className="inp5"></input>
            <input placeholder="Nội dung" className="inp6"></input>
            <input
              placeholder="Đính kèm file"
              className="inp7"
              type="file"
              style={{ width: "75%" }}
            ></input>
            <button className="inp8">Tải lên</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LienHe;
