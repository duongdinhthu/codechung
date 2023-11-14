import React,{Component,useState} from "react";
export default function PT(){
    const[a,setNumber1] = useState({});
    const[b,setNumber2] = useState({});
    const[c,setNumber3] = useState({});
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
return(
    <div>
        <form>
            <label>
                Enter your name:<input
                type="number"
                value={inputs.value}
            </label>
        </form>
    </div>
)