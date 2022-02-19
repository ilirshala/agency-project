import React, { useRef } from "react";
import "../../style/Home/HomeSixth.scss";

function HomeSixth({ contactRef }) {
  return (
    <div ref={contactRef} className="homeSixth">
      <h1>Contact</h1>
      <div className="line"></div>
      <form>
        <div className="namesDiv">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <textarea cols="30" rows="7" placeholder="Enter Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default HomeSixth;
