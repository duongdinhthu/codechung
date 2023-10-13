function myFunction(){
    var a = parseInt(document.getElementById('demo').value);
    var b = parseInt(document.getElementById('demo1').value);
    var c = parseInt(document.getElementById('demo2').value);
    var d = (a+b+c)/2
    var e = d*(d-a)*(d-b)*(d-c);
    var f = Math.sqrt(e);
    if(a+b<=c||a+c<=b||b+c<=a){
        document.getElementById('kq1').innerHTML = 'Đây không phải là tam giác, bạn hãy nhập lại';
    }else{
        document.getElementById('kq1').innerHTML = ('Diện tích tam giác là: '+ f);
    }
}