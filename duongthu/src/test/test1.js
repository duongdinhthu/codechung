import React, { useState } from "react";

export default function Add() {
  const [a, setA] = useState({});
  const [b, setB] = useState({});
  const [c, setC] = useState({});

  return (
    <div className="test1">
      <input value={a} onChange={(e) => setA(e.target.value)}>
        nhập số a
      </input>
      <input value={b} onChange={(e) => setB(e.target.value)}>
        nhập số B
      </input>
      <input value={c} onChange={(e) => setC(e.target.value)}>
        nhập số C
      </input>
      <span>a,b,c</span>
    </div>
  );
}
