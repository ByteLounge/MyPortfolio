import "./styles/Career.css";
import { PORTFOLIO } from "../data/portfolioData";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {PORTFOLIO.experience.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.title}</h4>
                </div>
                <h3>{exp.dates}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
          <h2 style={{ marginTop: "50px" }}>
            Education <span>&</span>
            <br /> qualifications
          </h2>
          {PORTFOLIO.education.map((edu, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{edu.title}</h4>
                </div>
                <h3>{edu.dates}</h3>
              </div>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
