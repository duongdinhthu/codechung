
function myFunction(){
    var a = document.getElementById('demo').value;
    var b = document.getElementById('demo1').value;
    var c = document.getElementById('demo2').value;
    var d = b*b - 4*a*c;
    if(a==0 && b==0){
        document.getElementById('kq1').innerHTML = 'Phương trình vô nghiệm ';
    } else if(a==0 && b != 0){
        document.getElementById('kq1').innerHTML = 'Phương trình có 1 nghiệm: ' + (-c/b) 
    }else if(a !=0 ){
        if(d < 0){
            document.getElementById('kq1').innerHTML = 'Phương trình vô nghiệm '
        } else if(d == 0){
            document.getElementById('kq1').innerHTML = 'Phương trình có 2 nghiệm kép: ' + (-b/(2*a))         
        }else if(d>0){
            document.getElementById('kq1').innerHTML = 'Phương trình có 2 nghiệm phân biệt: '
            document.getElementById('kq2').innerHTML = 'Nghiệm x1 = ' + ((-b+Math.sqrt(d))/(2*a)) 
            document.getElementById('kq3').innerHTML = 'Nghiệm x2 = ' + ((-b-Math.sqrt(d))/(2*a)) 
        }
    }
    
}