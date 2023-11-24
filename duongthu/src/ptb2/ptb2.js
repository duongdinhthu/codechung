 import React, { useState } from 'react'; 
 
 
 import * as math from 'mathjs';
function QuadraticEquation() {
    const [a, setA] = useState({}); 
    const [b, setB] = useState({}); 
    const [c, setC] = useState({});
    const [result, setResult] = useState('');

const solveQuadraticEquation = () => { 
    const delta = math.pow(b, 2) - 4 * a * c; 
    if (delta < 0) {
        setResult('Phương trình vô nghiệm'); 
    } else if (delta === 0) { 
        const x = -b / (2 * a); 
        setResult('Phương trình có nghiệm kép x = '+ (x)); 
    } else { 
        const x1 = (-b + math.sqrt(delta)) / (2 * a); 
        const x2 = (-b - math.sqrt(delta)) / (2 * a); 
        setResult('Phương trình có 2 nghiệm x1 = ' +(x1) + ' và x2 = ' +(x2)); 
    }    
};

return (
     <div> 
        <h2>Giải phương trình bậc 2</h2>
        <div> <label>a:</label> 
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} /> 
        </div> 
        <div> 
            <label>b:</label> 
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} /> 
        </div> 
        <div> 
            <label>c:</label> 
            <input type="number" value={c} onChange={(e) => setC(e.target.value)} /> 
        </div> 
            <button onClick={solveQuadraticEquation}>Giải</button> 
        <div>
            {result}
        </div> 
        </div> 
        ); 
} 
        export default QuadraticEquation;