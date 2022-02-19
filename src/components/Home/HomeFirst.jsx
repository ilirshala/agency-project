import React from "react";
import "../../style/Home/HomeFirst.scss";

function HomeFirst({ topRef }) {
  return (
    <div ref={topRef} className="homeFirst">
      <p>Welcome to our page</p>
      <h1>We Are agency</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis
        porro corporis neque nulla fugiat ipsa facere distinctio, asperiores
        dolorum.
      </p>
    </div>
  );
}

export default HomeFirst;
