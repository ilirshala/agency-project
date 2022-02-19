import React from "react";
import "../../style/Home/HomeFourth.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

function HomeFourth({ portfolioRef }) {
  return (
    <div ref={portfolioRef} className="homeFourth">
      <h1>PORTFOLIO</h1>
      <div className="line"></div>
      <div className="homeFourth__row">
        <div
          className="homeFourth__row-card"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="homeFourth__row-card-container">
            <button>Live Demo</button>
          </div>
        </div>
        <div
          className="homeFourth__row-card"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="homeFourth__row-card-container">
            <button>Live Demo</button>
          </div>
        </div>
        <div
          className="homeFourth__row-card"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="homeFourth__row-card-container">
            <button>Live Demo</button>
          </div>
        </div>
        <div
          className="homeFourth__row-card"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <div className="homeFourth__row-card-container">
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFourth;
