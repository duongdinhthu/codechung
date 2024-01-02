import React from "react";
import "./App.css";
import DichVu from "./DichVu";
import { Route, Routes, Link } from "react-router-dom";
import LienHe from "./LienHe";
import TinTuc from "./TinTuc";
import Home from "./Home";
import KhuyenMai from "./KhuyenMai";
import Shop from "./Shop";

export default function App1() {
  return (
    <div class="container">
      <div class="info">
        <p class="info1">Thời gian làm việc: 9h - 21h</p>
        <p class="info2">Email: abc@gmail.com</p>
        <p class="info3">Hotline: 1234567890</p>
      </div>
      <div class="header0">
        <Link to="/" className="Dh">
          <img
            class="Dh"
            src="https://dalhyebeauty.vn/upload/photo/dalhyebeauty-3868.png"
            alt="Logo"
          />
          <Link />
        </Link>
        <Link to={"./GioiThieu"}>Giới Thiệu</Link>
        <Link to={"/DichVu"} class="dichvu">
          Dịch Vụ
        </Link>
        <Link to={"/KhuyenMai"}>Khuyến Mãi</Link>
        <Link to={"/Shop"}>Shop</Link>
        <Link to={"/TinTuc"}>Tin Tức</Link>
        <Link to={"/LienHe"} className="lienhe">
          Liên Hệ
        </Link>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <Routes>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/KhuyenMai" element={<KhuyenMai />} />
        <Route path="/" element={<Home />} />
        <Route path="/TinTuc" element={<TinTuc />} />
        <Route path="/LienHe" element={<LienHe />} />
        <Route path="/DichVu" element={<DichVu />} />
      </Routes>
      <div class="n1">
        <img
          class="pic1"
          src="https://dalhyebeauty.vn/thumbs/1920x650x1/upload/photo/slider-6065.png"
          alt="p1"
        />
        <div class="sdtname">
          <input class="sdt" type="text" placeholder="Số Điện Thoại" />
          <input class="name" type="text" placeholder="Nhập họ tên" />
          <button class="submit"></button>
        </div>
      </div>
      <div class="mid1">
        <img
          class="pic2"
          src="https://dalhyebeauty.vn/thumbs/1200x900x1/upload/news/cl0034-4349.jpeg"
          alt="p2"
        />
        <div class="info_mid1">
          <p class="font1">Giới thiệu</p>

          <button>Xem thêm</button>
        </div>
      </div>
      <div className="h3">
        <h3>Service | Dalhye Beauty</h3>
      </div>
      <div class="ser">
        <div class="left">
          <a href="#slide-1">NAILS</a>
          <a href="#slide-2">WAXING</a>
          <a href="#slide-3">FOOT CARE</a>
          <a href="#slide-4">DƯỠNG SINH</a>
          <a href="#slide-5">SKIN TREATMENT</a>
          <a href="#slide-6">EYELASHES</a>
        </div>
        <div class="slider">
          <div className="slide" id="slide-1">
            <img
              src="https://dalhyebeauty.vn/thumbs/700x250x1/upload/news/1-5710.png"
              alt=""
            />
          </div>
          <div className="slide" id="slide-2">
            <img
              src="https://dalhyebeauty.vn/thumbs/700x250x1/upload/news/waxing-7602.png"
              alt=""
            />
          </div>
          <div className="slide" id="slide-3">
            <img
              src="https://dalhyebeauty.vn/thumbs/700x250x1/upload/news/foot-7710.png"
              alt=""
            />
          </div>
          <div className="slide" id="slide-4">
            <img
              src="https://dalhyebeauty.vn/thumbs/700x250x1/upload/news/z4429906231918253f508be7676dba0726a5b7c47cfc2a-4076.jpg"
              alt=""
            />
          </div>
          <div className="slide" id="slide-5">
            <img
              src="https://dalhyebeauty.vn/thumbs/700x250x1/upload/news/skin-9076.png"
              alt=""
            />
          </div>
          <div className="slide" id="slide-6">
            <img
              src="https://dalhyebeauty.vn/thumbs/700x250x1/upload/news/eysslash-7799.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h3_2">
        <h3>Customer | Dalhye Beauty</h3>
      </div>
      <div class="box_cus">
        <div class="cus1">
          <img
            src="https://dalhyebeauty.vn/thumbs/150x150x1/upload/news/trang-nhungdocx-1635528230350-4981.png"
            alt=""
          />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div class="cus2">
          <img
            src="https://dalhyebeauty.vn/thumbs/150x150x1/upload/news/42526362-1561145807357404-213219-4686.png"
            alt=""
          />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div class="cus3">
          <img
            src="https://dalhyebeauty.vn/thumbs/150x150x1/upload/news/anh-nguoi-dep-hinh-nguoi-mau-de-1688.png"
            alt=""
          />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
      <div className="h3_3">
        <h3>Album | Dalhye Beauty</h3>
      </div>
      <div class="album">
        <div className="album1">
          <button class="nails">
            <img
              src="https://cdn-amz.woka.io/images/I/61xumms8DML.jpg"
              alt="NAILS"
            />
            <h3>NAILS</h3>
          </button>
          <button class="eyelashes">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVow6SyTY6eFN0d4oU06ufwCw0s7E84EB7yg&usqp=CAU"
              alt="EYELASHES"
            />
            <h3>EYELASHES</h3>
          </button>
          <button class="skin">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6-gX6f0OKJ66FdUl918O_cxs42dNsftQpw&usqp=CAU"
              alt="SKIN TREATMENT"
            />
            <h3>SKIN TREATMENT</h3>
          </button>
        </div>
        <div className="album2">
          <button class="nourishing">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJD4NtZUKlCz8Vt2zUrAyK8jUvUmPXzEhdg&usqp=CAU"
              alt="NOURISHING"
            />
            <h3>NOURISHING</h3>
          </button>
          <button class="waxing">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQHbNq_UpMhN1xxTt-5fEYFglscGlKA6cbw&usqp=CAU"
              alt="WAXING"
            />
            <h3>WAXING</h3>
          </button>
          <button class="cosmetic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOEbHevUGIuM_wPpyrzyXJPpuyReOxshWiA&usqp=CAU"
              alt="COSMETIC"
            />
            <h3>CONSMETIC TATTOO</h3>
          </button>
        </div>
      </div>
      <div class="footer">
        <div class="footer1">
          <img
            class="Dh"
            src="https://dalhyebeauty.vn/upload/photo/dalhyebeauty-3868.png"
            alt=""
            height="100px"
          />
          <p>
            Địa chỉ: số 80 Nguyễn Hữu Huân, Phường Lý Thái Tổ, Quận Hoàn kiếm,
            Hà Nội
          </p>
          <p>Email: contact@dalhyebeauty.vn</p>
          <p>Hotline: 024 6680 9066</p>
          <p>Website: https://dalhyebeauty.vn</p>
        </div>
        <div class="footer2">
          <h3>CHÍNH SÁCH ĐIỀU KHOẢN</h3>
          <p>Hỗ trợ đặt hàng</p>
          <p>Chính sách khách hàng</p>
          <p>Chính sách bảo hành</p>
          <p>Chính sách người dùng</p>
          <p>Chính sách mua hàng</p>
        </div>
        <div class="footer3">
          <p>Ngân hàng: MB bank nhé</p>
          <p>STK: 0965700995</p>
          <p>TTK: Trần Vũ đẹp zai</p>
        </div>
      </div>
    </div>
  );
}
