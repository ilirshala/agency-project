import React from "react";
import "../../style/Services/Service.scss";

function Service({ title, icon, paragraph }) {
  return (
    <div className="service">
      <h1>{title}</h1>
      {icon}
      <p>{paragraph}</p>
    </div>
  );
}

export default Service;
