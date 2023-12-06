import React from "react";
import "./About.css";
export default function About() {
  return (
    <div>
      <h1>About US</h1>
      <div>
        <div className="picture"></div>
        <h3>Ceo: Nguyen Thi Hanh</h3>
        <p> The fouder is also the general managing director</p>
      </div>
      <div>
        <div className="picture1"></div>
        <h3>CTO: Nguyen Thanh Binh</h3>
        <p>10 years of experience in buiding a speciallzed technical team</p>
      </div>
      <div>
        <div className="picture2"></div>
        <h3>CFO: Nguyen Van Hoa</h3>
        <p>
          5 years of experience in finalcial management of leading enter prises
          in Viet Nam
        </p>
      </div>
    </div>
  );
}
