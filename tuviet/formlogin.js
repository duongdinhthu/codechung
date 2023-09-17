alert('Form đăng nhập Thứ đẹp trai nhé . hehe')
document.addEventListener('DOMContentLoaded', function(){
    const searchIcon = document.getElementById('search-icon');
    const searchForm = document.getElementById('search-form');

    searchIcon.addEventListener('click', function(){
        if(searchForm.style.display === 'block'){
            searchForm.style.display = 'none';
        } else{
            searchForm.style.display = 'block';
        }
    });
    document.addEventListener('click', function(even){
        if(even.target != searchIcon && !searchForm.contains(even.target)){
            searchForm.style.display = 'none';
        }
    })
});
$(document).ready(function(){
    // $ là tạo sự kiện cho document, ready là sẵn sàng chạy 
    $('#eye').click(function(){
        // $ tạo sự kiện khi click vào con mắt trên wed 
        $(this).toggleClass('open')
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        // khi click vào con mắt thì sẽ gọi i và thay đổi toogleClas fa-eye-slash thành fa-eye
        if($(this).hasClass('open')){
            // nếu sự kiện click con mắt có open thì ...
            $(this).prev().attr('type', 'text');
            // từ i gọi đến thằng input bên trên , tiếp tục gọi đến attr và gán thay type(hiện đang là password sẽ chuyển sang text)             
        }
        else {
            $(this).prev().attr('type', 'password');
        }
    });
});