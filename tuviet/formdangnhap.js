
$(document).ready(function(){
    // $ là tạo sự kiện cho document, ready là sẵn sàng chạy 
    $('#eye').click(function(){
        // $ tạo sự kiện khi click vào con mắt trên wed 
        $(this).toggleClass('open')
        // this thay cho #eye 
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        // khi click vào con mắt thì sẽ gọi i và thay đổi toogleClas fa-eye-slash thành fa-eye
        if($(this).hasClass('open')){
            // nếu sự kiện click con mắt có open thì ...
            $(this).prev().attr('type', 'text');
            // từ i gọi đến thằng input bên trên , tiếp tục gọi đến attr và gán thay type(hiện đang là password sẽ chuyển sang text)             
            //attr là xác định thuộc tính của thành phần . bỏ qua css
        }
        else {
            $(this).prev().attr('type', 'password');
        }
    });
});

$('#form-submit').click(function(){
    alert('Đang đăng nhập, cứ bình tĩnh :D');
})
$('#button1').click(function(){
    var a = document.getElementById('body');
    a.classList.toggle('xoa');
});
$('#button2').click(function(){
    var a = document.getElementById('form-login');
    a.classList.toggle('xoa');
})
$('#button3').click(function(){
    var a = document.getElementById('wrapper');
    a.classList.toggle('xoa',);
})
