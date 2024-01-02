import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";

function LienHe() {
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [diachi, setDiachi] = useState([]);
  const [email, setEmail] = useState([]);
  const [chude, setChude] = useState([]);
  const [noidung, setNoidung] = useState([]);
  const [file, setFile] = useState([]);
  const postData = () => {
    console.log(name);
    console.log(phone);
    console.log(diachi);
    console.log(email);
    axios
      .post("https://658c1d1c859b3491d3f58249.mockapi.io/api/ok/ok", {
        name,
        phone,
        diachi,
        email,
        chude,
        noidung,
        file,
      })
      .then(() => {
        console.log("ok");
      });
  };

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
          <Form className="form">
            <input
              placeholder="Họ tên"
              className="inp1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Số điện thoại"
              className="inp2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              placeholder="Địa chỉ"
              className="inp3"
              value={diachi}
              onChange={(e) => setDiachi(e.target.value)}
            />

            <input
              placeholder="Email"
              className="inp4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Chủ đề"
              className="inp5"
              value={chude}
              onChange={(e) => setChude(e.target.value)}
            ></input>
            <input
              placeholder="Nội dung"
              className="inp6"
              value={noidung}
              onChange={(e) => setNoidung(e.target.value)}
            ></input>
            <input
              placeholder="Đính kèm file"
              className="inp7"
              type="file"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            ></input>
            <button className="inp8" onClick={postData}>
              Tải lên
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default LienHe;
