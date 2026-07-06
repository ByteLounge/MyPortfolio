import "./styles/About.css";
import { PORTFOLIO } from "../data/portfolioData";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me glass-card">
        <span className="about-subtitle">GET TO KNOW ME</span>
        <h3 className="title">About Me</h3>
        <p className="para">
          {PORTFOLIO.person.about}
        </p>
      </div>
    </div>
  );
};

export default About;
