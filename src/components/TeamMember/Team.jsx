import React from "react";
import "../../style/TeamMember/Team.scss";

function Team({ bgImg, name, paragraph }) {
  return (
    <div className="team">
      <div
        className="team_img"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="team_other">
        <h1>{name}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Team;
