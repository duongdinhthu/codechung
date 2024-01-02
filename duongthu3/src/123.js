import logo from './logo.svg';
import './App.css';

function App() {
  return ( <div>
    
<h1 className="hidden-seoh">Dịch vụ</h1><div className="header">
	<div className="header-top">
		<div className="wrap-content d-flex align-items-center justify-content-between">
			<p className="info-header">Thời gian làm việc : 9h - 21h</p>
			<p className="info-header">Email: info@dalhyebeauty.vn</p>
			<p className="info-header">Hotline: 02466809066</p>
         
		</div>
	</div>
</div><div className="menu">
    <div className="wrap-content d-flex align-items-center justify-content-end">
        <a className="logo-header" href=""> <img src = " https://dalhyebeauty.vn/upload/photo/dalhyebeauty-3868.png"/></a>
        <ul className="d-flex align-items-center justify-content-end">
            <li><a className="transition " href="gioi-thieu" title="Giới thiệu"><h2>Giới thiệu</h2></a></li>
            <li><a className="transition active" href="dich-vu" title="Dịch vụ"><h2>Dịch vụ</h2></a></li>
            <li><a className="transition " href="khuyen-mai" title="Khuyến mãi"><h2>Khuyến mãi</h2></a></li>
            <li>
                <a className="transition " href="shop" title="Shop"><h2>Shop</h2></a>
                            </li>
            <li><a className="transition " href="tin-tuc" title="Tin tức"><h2>Tin tức</h2></a></li>
            <li><a className="transition " href="lien-he" title="Liên hệ"><h2>Liên hệ</h2></a></li>
        </ul>
        <div className="search-rp">
            <a className="icon-search1 transition w-clear" title="Tìm kiếm">
                <i className="fas fa-search"></i>
            </a>
            <div className="search-menu w-clear">
                <input className="txt-s-rp" type="text" name="keyword" id="keyword" placeholder="search" onkeypress="doEnter(event,'keyword');"/>
                <a className="btn-s-rp" onclick="onSearch();"><i className="fa fa-search" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    
</div><div className="menu-res">
    <div className="menu-bar-res">
        <a id="hamburger" href="#menu" title="Menu"><span></span></a>
        
        <div className="search-res">
            <p className="icon-search transition"><i className="fa fa-search"></i></p>
            <div className="search-grid w-clear">
                <input type="text" name="keyword2" id="keyword2" placeholder="Nhập từ khóa cần tìm..." onkeypress="doEnter(event,'keyword2');"/>
                <p onclick="onSearch('keyword2');"><i className="fa fa-search"></i></p>
            </div>
        </div>
    </div>
    

<div className="content-main w-clear">
            <a className="news text-decoration-none w-clear" href="waxing" title="WAXING ">
            <p className="pic-news scale-img">< img  src = "https://dalhyebeauty.vn/thumbs/320x240x1/upload/news/waxing-7602.png"  alt="WAXING "/></p>
            <div className="info-news">
                <h3 className="name-news">WAXING </h3>
                <p className="time-news">Ngày đăng: 14/06/2023 08:06 AM</p>
                <div className="desc-news text-split"></div>
            </div>
        </a>
            <a className="news text-decoration-none w-clear" href="foot-care" title="FOOT CARE  ">
            <p className="pic-news scale-img"><img src="https://dalhyebeauty.vn/thumbs/320x240x1/upload/news/foot-7710.png" alt="FOOT CARE  "/></p>
            <div className="info-news">
                <h3 className="name-news">FOOT CARE  </h3>
                <p className="time-news">Ngày đăng: 11/06/2023 11:27 PM</p>
                <div className="desc-news text-split">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and</div>
            </div>
        </a>
            <a className="news text-decoration-none w-clear" href="dich-vu-bom-moi" title="DƯỠNG  SINH  ">
            <p className="pic-news scale-img"><img  src ="https://dalhyebeauty.vn/thumbs/320x240x1/upload/news/z4429906231918253f508be7676dba0726a5b7c47cfc2a-4076.jpg" alt="DƯỠNG  SINH  "/></p>
            <div className="info-news">
                <h3 className="name-news">DƯỠNG  SINH  </h3>
                <p className="time-news">Ngày đăng: 11/06/2023 11:14 PM</p>
                <div className="desc-news text-split"></div>
            </div>
        </a>
            <a className="news text-decoration-none w-clear" href="skin-treatment" title="SKIN  TREATMENT  ">
            <p className="pic-news scale-img"><img src="https://dalhyebeauty.vn/thumbs/320x240x1/upload/news/skin-9076.png"  alt="SKIN  TREATMENT  "/></p>
            <div className="info-news">
                <h3 className="name-news">SKIN  TREATMENT  </h3>
                <p className="time-news">Ngày đăng: 11/06/2023 11:14 PM</p>
                <div className="desc-news text-split">MÔ  TẢ  NGẮNN
</div>
            </div>
        </a>
            <a className="news text-decoration-none w-clear" href="eyelashes" title="EYELASHES">
            <p className="pic-news scale-img"><img src="https://dalhyebeauty.vn/thumbs/320x240x1/upload/news/eysslash-7799.png" alt="EYELASHES"/></p>
            <div className="info-news">
                <h3 className="name-news">EYELASHES</h3>
                <p className="time-news">Ngày đăng: 11/06/2023 11:14 PM</p>
                <div className="desc-news text-split">MÔ TẢ NGẮN CỦA  DỊCH  VỤ</div>
            </div>
        </a>
            <a className="news text-decoration-none w-clear" href="nails" title="NAILS">
            <p className="pic-news scale-img"><img src="https://dalhyebeauty.vn/thumbs/320x240x1/upload/news/1-5710.png" alt="NAILS"/></p>
            <div className="info-news">
                <h3 className="name-news">NAILS</h3>
                <p className="time-news">Ngày đăng: 11/06/2023 11:13 PM</p>
                <div className="desc-news text-split">mô  tả ngắn dịch vụ làm móng </div>
            </div>
        </a>
        <div className="clear"></div>
    <div className="pagination-home"></div>
</div></div>
    
<div className="footer">
    <div className="footer-article">
        <div className="wrap-content d-flex align-items-start justify-content-between">
            <div className="footer-news">
                <a className="logo-footer" href=""><img src="https://dalhyebeauty.vn/upload/photo/dalhyebeauty-3868.png"/></a>
                <div className="info-footer"><p>Địa chỉ: số 80 Nguyễn Hữu Huân, Phường Lý Thái Tổ, Quận Hoàn kiếm, Hà Nội</p>

<p>Email: contact@dalhyebeauty.vn</p>

<p>Hotline: 024 6680 9066</p>

<p>Website: https://dalhyebeauty.vn</p>
</div>
            </div>
            <div className="footer-news">
                <h2 className="title-footer">Chính sách điều khoản</h2>
                <ul className="footer-ul">
                                            <li><a className="text-decoration-none" href="ho-tro-dat-hang" title="Hỗ trợ đặt hàng">Hỗ trợ đặt hàng</a></li>
                                            <li><a className="text-decoration-none" href="chinh-sach-tra-hang" title="Chính sách trả hàng">Chính sách trả hàng</a></li>
                                            <li><a className="text-decoration-none" href="chinh-sach-bao-hanh" title="Chính sách bảo hành">Chính sách bảo hành</a></li>
                                            <li><a className="text-decoration-none" href="chinh-sach-nguoi-dung" title="Chính sách người dùng">Chính sách người dùng</a></li>
                                            <li><a className="text-decoration-none" href="chinh-sach-mua-hang" title="Chính sách mua hàng">Chính sách mua hàng</a></li>
                                    </ul>
            </div>
            <div className="footer-news">
                <ul className="social social-footer">
                                            <li><a href="" target="_blank"><img src="upload/photo/mxh3-1-5052.png" alt=""/></a></li>
                                            <li><a href="" target="_blank"><img src="upload/photo/mxh3-2-2182.png" alt=""/></a></li>
                                            <li><a href="" target="_blank"><img src="upload/photo/mxh3-3-5405.png" alt=""/></a></li>
                                            <li><a href="" target="_blank"><img src="upload/photo/mxh3-4-9673.png" alt=""/></a></li>
                                    </ul>
                <div className="info-footer"><p>Ngân hàng Abc</p>

<p>STK : </p>

<p>TTK : NGUYEN VAN A</p>

<p> </p>
</div>
            </div>
            
            <div className="footer-news">
                <div id="footer-map"></div>            </div>
        </div>
    </div>
    
    <div id="messages-facebook"></div></div>
    <a className="cart-fixed text-decoration-none" href="gio-hang" title="Giỏ hàng">
        <i className="fas fa-shopping-bag"></i>
        <span className="count-cart">0</span>
    </a>
<a className="btn-zalo btn-frame text-decoration-none" target="_blank" href="https://zalo.me/0789422594">
    <div className="animated infinite zoomIn kenit-alo-circle"></div>
    <div className="animated infinite pulse kenit-alo-circle-fill"></div>
    <i><img src="assets/images/zl.png" alt="Zalo"/></i>
</a>
<a className="btn-phone btn-frame text-decoration-none" href="tel:02466809066">
    <div className="animated infinite zoomIn kenit-alo-circle"></div>
    <div className="animated infinite pulse kenit-alo-circle-fill"></div>
    <i><img src="assets/images/hl.png" alt="Hotline"/></i>
</a>

<div className="modal modal-custom fade" id="popup-notify" tabindex="-1" role="dialog" aria-labelledby="popup-notify-label" aria-hidden="true">
	<div className="modal-dialog modal-dialog-top modal-md" role="document">
		<div className="modal-content">
			<div className="modal-header">
				<h6 className="modal-title" id="popup-notify-label">Thông báo</h6>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body"></div>
			<div className="modal-footer justify-content-center">
				<button type="button" className="btn btn-danger" data-dismiss="modal">Thoát</button>
			</div>
		</div>
	</div>
</div>


<div className="modal fade" id="popup-cart" tabindex="-1" role="dialog" aria-labelledby="popup-cart-label" aria-hidden="true">
	<div className="modal-dialog modal-dialog-top modal-lg" role="document">
		<div className="modal-content">
			<div className="modal-header">
				<h6 className="modal-title" id="popup-cart-label">Giỏ hàng của bạn</h6>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body"></div>
		</div>
	</div>
</div>


 </div>
  );
}

export default App;
