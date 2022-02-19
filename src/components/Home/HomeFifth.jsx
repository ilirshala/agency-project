import React from "react";
import "../../style/Home/HomeFifth.scss";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import Team from "../TeamMember/Team";

function HomeFifth({ teamRef }) {
  return (
    <div ref={teamRef} className="homeFifth">
      <h1>Our Team</h1>

      <div className="line"></div>
      <div className="homeFifth__row">
        <Team
          bgImg={avatar1}
          name="John Doe"
          paragraph="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
      laborum aut harum aliquam eligendi animi!"
        />
        <Team
          bgImg={avatar2}
          name="Max James"
          paragraph="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
      laborum aut harum aliquam eligendi animi!"
        />
        <Team
          bgImg={avatar3}
          name="Micheal Carlos"
          paragraph="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
      laborum aut harum aliquam eligendi animi!"
        />
        <Team
          bgImg={avatar4}
          name="Pep Johnson"
          paragraph="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
      laborum aut harum aliquam eligendi animi!"
        />
      </div>
    </div>
  );
}

export default HomeFifth;
