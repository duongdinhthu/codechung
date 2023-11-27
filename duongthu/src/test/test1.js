import React, { useState } from "react";

export default function Test() {
  const [user, setUser] = useState({});
  const [password, setPass] = useState({});

  return (
    <div>
      <form>
        user :
        <input
          value={user}
          type="text"
          placeholder="Nhập user..."
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <br></br>
        passworld:
        <input
          value={password}
          type="password"
          placeholder="Nhập passworld ..."
          onChange={(e) => setPass(e.target.value)}
        ></input>
      </form>
      <br></br>
    </div>
  );
}
