import React, { useState } from "react";

export default function Test1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState({});
  const [c, setC] = useState({});
  // console.log({ a });
  return (
    <div>
      <input
        value={a}
        type="text"
        onChange={(e) => setA(e.target.value)}
      ></input>
      <input
        value={b}
        type="text"
        onChange={(e) => setB(e.target.value)}
      ></input>
      <input
        value={c}
        type="text"
        onChange={(e) => setC(e.target.value)}
      ></input>
      <p>{a}</p>
      {console.log({ a })};
    </div>
  );
}
