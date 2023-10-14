function myFunction(){
    var a = parseInt(document.getElementById('demo').value);
    var b = parseInt(document.getElementById('demo1').value);
    var c = parseInt(document.getElementById('demo2').value);
    var d = (a+b+c)/2
    var e = d*(d-a)*(d-b)*(d-c);
    var f = Math.sqrt(e);
    if(a+b<=c||a+c<=b||b+c<=a){
        document.getElementById('kq1').innerHTML = 'Xét điều kiện cộng tổng 2 cạnh không lớn hơn cạnh còn lại <br>nên không thể hình thành tam giác , mời bạn nhập lại';
    }else{
        document.getElementById('kq1').innerHTML = 'Ta có công thức tính diện tích tam giác theo công thức heron: <br> d = (a+b+c)/2 (<em>a,b,c là 3 cạnh của tam giác </em>) <br>e = d*(d-a)*(d-b)*(d-c)<br>f = căn bậc 2 của e (<em> f là diện tích tam giác</em>)<br>=> f = ' + f + '<br>=> diện tích tam giác là: ' + f;
    }
}