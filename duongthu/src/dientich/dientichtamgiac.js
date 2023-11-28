import React, { useState } from "react";
import * as math from "mathjs";
function Dientich() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [result, setResult] = useState("");

  const Dientich1 = () => {
    const x = a + b;
    const y = b + c;
    const z = c + a;
    const d = (parseFloat(a) + parseFloat(b) + parseFloat(c)) / 2;
    const e = d * (d - a) * (d - b) * (d - c);
    const f = math.sqrt(e);
    if (x < c || z < b || y < a) {
      setResult("Đây không phải là tam giác , mời bạn nhập lại");
      console.log(a, b, c, d, e, f);
    } else {
      setResult("Diện tích của tam giác là: " + f);
      console.log("check else");
    }
  };
  return (
    <div>
      <h2>Tính diện tích tam giác gồm 3 cạnh a,b,c bất kì :</h2>
      <div>
        <label>cạnh a:</label>
        <input
          type="number"
          value={parseFloat(a)}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div>
        <label>cạnh b:</label>
        <input
          type="number"
          value={parseFloat(b)}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div>
        <label>cạnh c:</label>
        <input
          type="number"
          value={parseFloat(c)}
          onChange={(e) => setC(e.target.value)}
        />
      </div>
      <button onClick={Dientich1}>Tìm diện tích</button>
      <div>{result}</div>
    </div>
  );
}
export default Dientich;
