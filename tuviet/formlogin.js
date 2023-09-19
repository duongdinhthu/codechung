alert('Form đăng nhập Thứ đẹp trai nhé . hehe')
document.addEventListener('DOMContentLoaded', function(){
    // tạo ra sự kiện khi giao diện đã load xong thì làm 1 chức năng gì đó 
    const searchIcon = document.getElementById('search-icon');
    const searchForm = document.getElementById('search-form');
    // khai báo 2 biến icon và form trong đó const là khai báo hàm số 
    searchIcon.addEventListener('click', function(){
        // khai báo sự kiện khi người dùng click vào icon 
        if(searchForm.style.display === 'block'){
            //nếu form đang hiển thị
            searchForm.style.display = 'none';
            // thì sẽ ẩn form 
        } else{ 
            // ngược lại
            searchForm.style.display = 'block';
            // thì sẽ hiển thị form 
        }
    });
    document.addEventListener('click', function(even){
        // tạo sự kiện click vào 1 vùng bất kì gọi là even 
        if(even.target != searchIcon && !searchForm.contains(even.target)){
            // nếu vị trí vừa nhấp không phải là icon VÀ không thuộc search form 
            searchForm.style.display = 'none';
            // thì sẽ ẩn searchform 
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
document.addEventListener('DOMContentLoaded', function(){
    const body = document.body;
    const switch_mode = document.querySelector('#switch-mode i')
    switch_mode.addEventListener('click',() =>{
    body.classList.toggle('dark');
});
});

    