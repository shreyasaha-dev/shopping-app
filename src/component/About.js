import AboutCard from "./AboutCard";
import "../style/About.css";
const About = () => {
  return (
    <div className="total-about-section">
      <h1>About US</h1>
      <div className="about-story-section details">
        <AboutCard title="Our Story" />
        <img src={require("../images/about-01.jpg.webp")} alt="" />
      </div>
      <div className="about-mission-section details">
        <img
          src={require("../images/gabrielle-henderson-T0d3UdwPkr0-unsplash.jpg")}
          alt=""
        />
        <AboutCard title="Our Mission" />
      </div>
    </div>
  );
};
export default About;
