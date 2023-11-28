import React, { useState } from "react";

export default function Test2() {
  const [a, setA] = useState(0);
  const [b, setB] = useState("");
  const [c, setC] = useState("");
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
      <p>{c}</p>
      {console.log({ a })}
    </div>
  );
}
