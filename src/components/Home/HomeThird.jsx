import React from "react";
import "../../style/Home/HomeThird.scss";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import ConstructionIcon from "@mui/icons-material/Construction";
import Service from "../Services/Service";

function HomeThird({ servicesRef }) {
  return (
    <div ref={servicesRef} className="homeThird">
      <h1>Services</h1>
      <div className="line"></div>
      <div className="homeThird__row">
        <Service
          title="WEB DESGIN"
          icon={<DesktopMacIcon />}
          paragraph="Lorem ipsum dolor sit amet."
        />
        <Service
          title="PRINT"
          icon={<LocalPrintshopIcon />}
          paragraph="Lorem ipsum dolor sit amet."
        />
        <Service
          title="SEO"
          icon={<SearchOffIcon />}
          paragraph="Lorem ipsum dolor sit amet."
        />
      </div>
      <div className="homeThird__row">
        <Service
          title="CONSULTING"
          icon={<MessageIcon />}
          paragraph="Lorem ipsum dolor sit amet."
        />
        <Service
          title="EMAIL"
          icon={<EmailIcon />}
          paragraph="Lorem ipsum dolor sit amet."
        />
        <Service
          title="UX & UI"
          icon={<ConstructionIcon />}
          paragraph="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  );
}

export default HomeThird;
