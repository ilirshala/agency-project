import React, { useState } from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavbarResp from "../NavbarResp/NavbarResp";

function Navbar({
  scrollToContact,
  scrollToTop,
  scrollToAbout,
  scrollToServices,
  scrollToPortfolio,
  scrollToTeam,
}) {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className="navbarResp"
        style={{ transform: showMenu ? "translateX(0)" : "" }}
      >
        <NavbarResp
          scrollToTeam={scrollToTeam}
          scrollToPortfolio={scrollToPortfolio}
          scrollToServices={scrollToServices}
          scrollToContact={scrollToContact}
          scrollToTop={scrollToTop}
          scrollToAbout={scrollToAbout}
        />
      </div>
      <div className={scroll ? "navbarActive navbar" : "navbar"}>
        <h1 className="title">Agency</h1>
        <ul>
          <li onClick={scrollToTop}>Home</li>
          <li onClick={scrollToAbout}>About</li>
          <li onClick={scrollToServices}>Services</li>
          <li onClick={scrollToTop}>Agency</li>
          <li onClick={scrollToPortfolio}>Portfolio</li>
          <li onClick={scrollToTeam}>Team</li>
          <li onClick={scrollToContact}>Contact</li>
          <li></li>
        </ul>
        {showMenu ? (
          <CloseIcon onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <MenuIcon onClick={() => setShowMenu(!showMenu)} />
        )}
      </div>
    </>
  );
}

export default Navbar;
