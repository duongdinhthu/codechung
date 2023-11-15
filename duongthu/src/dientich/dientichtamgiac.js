import React,{useState} from "react";
import * as math from 'mathjs';
function Dientich() {
    const [a, setA] = useState({}); 
    const [b, setB] = useState({});
    const [c, setC] = useState({});
    const [result, setResult] = useState('');
    
    const dientich1=()=>{
        const d = (parseInt(a)+parseInt(b)+parseInt(c))/2;
        const e = d*(d-a)*(d-b)*(d-c);
        const f = math.sqrt(e);   
        if(a+b>c||a+c>b||b+c>a) {  
            setResult('Diện tích tam giác là: '+ f);
            
        } else{
            
            setResult('Đây không phải là tam giác , mời bạn nhập lại');

        }
    };
    return(
        <div>
            <h2>
                Tính diện tích tam giác gồm 3 cạnh a,b,c bất kì :
            </h2>
            <div>
                <label>
                    cạnh a:
                </label>
                <input type="number" value={a} onChange={(e) => setA(e.target.value)} /> 
            </div>
            <div>
                <label>
                    cạnh b:
                </label>
                <input type="number" value={b} onChange={(e) => setB(e.target.value)}/>
            </div>
            <div>
                <label>
                    cạnh c:
                </label>
                <input type="number" value={c} onChange={(e) => setC(e.target.value)}/>
            </div>
            <button onClick={dientich1}>Tìm diện tích</button>
            <div>
                {result}
            </div>

        </div>
    )
}
export default Dientich;