import React, { useState } from "react";
import * as math from "mathjs";
function Dientich() {
  var [a, setA] = useState({});
  var [b, setB] = useState({});
  var [c, setC] = useState({});
  var [result, setResult] = useState("");

  function Dientich1() {
    var d = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
    var e = d * (d - a) * (d - b) * (d - c);
    var f = math.sqrt(e);
    if (a + b < c || a + c < b || b + c < a) {
      setResult("Đây không phải là tam giác , mời bạn nhập lại");
      console.log(a, b, c, d, e, f);
    } else {
      setResult("Diện tích của tam giác là: " + f);
      console.log("check else");
    }
  }
  return (
    <div>
      <h2>Tính diện tích tam giác gồm 3 cạnh a,b,c bất kì :</h2>
      <div>
        <label>cạnh a:</label>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div>
        <label>cạnh b:</label>
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div>
        <label>cạnh c:</label>
        <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
      </div>
      <button onClick={Dientich1}>Tìm diện tích</button>
      <div>{result}</div>
    </div>
  );
}
export default Dientich;
