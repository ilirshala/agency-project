import logo from "./logo.svg";
import "./App.css";
import HomeFirst from "./components/Home/HomeFirst";
import Navbar from "./components/Navbar/Navbar";
import HomeSecond from "./components/Home/HomeSecond";
import HomeThird from "./components/Home/HomeThird";
import HomeFourth from "./components/Home/HomeFourth";
import HomeFifth from "./components/Home/HomeFifth";
import HomeSixth from "./components/Home/HomeSixth";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";

function App() {
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToTop = () =>
    topRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () =>
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToPortfolio = () =>
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTeam = () =>
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="app">
      <Navbar
        scrollToTeam={scrollToTeam}
        scrollToPortfolio={scrollToPortfolio}
        scrollToServices={scrollToServices}
        scrollToContact={scrollToContact}
        scrollToTop={scrollToTop}
        scrollToAbout={scrollToAbout}
      />
      <HomeFirst topRef={topRef} />
      <HomeSecond aboutRef={aboutRef} />
      <HomeThird servicesRef={servicesRef} />
      <HomeFourth portfolioRef={portfolioRef} />
      <HomeFifth teamRef={teamRef} />
      <HomeSixth contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
