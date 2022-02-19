import React from "react";
import "./NavbarResp.scss";

function NavbarResp({
  scrollToContact,
  scrollToTop,
  scrollToAbout,
  scrollToServices,
  scrollToPortfoh3o,
  scrollToTeam,
}) {
  return (
    <div className="navbarRespDiv">
      <h3 onClick={scrollToTop}>Agency</h3>
      <h3 onClick={scrollToTop}>Home</h3>
      <h3 onClick={scrollToAbout}>About</h3>
      <h3 onClick={scrollToServices}>Services</h3>
      <h3 onClick={scrollToPortfoh3o}>Portfolio</h3>
      <h3 onClick={scrollToTeam}>Team</h3>
      <h3 onClick={scrollToContact}>Contact</h3>
    </div>
  );
}

export default NavbarResp;
