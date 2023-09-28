$(document).ready(function(){
    $('h1').click(function(){
        //khi click vào thẻ h1
        $('p').css('color','red');
        //thì sẽ thay đổi thẻ p ( cài đặt css của p thành màu đỏ)
        $(this).css('color','blue');
        //thì sẽ thay đổi css của h1 ( this thay cho h1) thành màu xanh
        alert('Thứ đẹp trai');
        //thì sẽ hiển thị thứ đẹp trai thông báo
    });
});
