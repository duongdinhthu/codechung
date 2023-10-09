var c = document.getElementById('demo')
var a = document.getElementById('demo2');
var b = document.getElementById('demo3');
$('#demo2').click(function(){
    a.classList.toggle('xoa');
});
//thực hiện kiểm tra thẻ body
$(document).ready(function(){
    $("#demo3").click(function(){
        var result = $("#demo2").hasClass("xoa");
        if(result){
            b.style.display = 'none';
        } else{
            b.style.color = 'red';
        }
        if(b.style.display = 'none'){
            c.style.background = ('color', 'red')
            c.style.color = ('color', '#fff')
        }
    });
});

