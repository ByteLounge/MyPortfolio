import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { PORTFOLIO } from "../data/portfolioData";
import { FiArrowUpRight } from "react-icons/fi";

const Work = () => {

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <span className="work-subtitle">SHOWCASE</span>
          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>
        <div className="work-flex">
          {PORTFOLIO.projects.map((project, index) => (
            <div className="work-box" key={index}>
              <a href={project.link} target="_blank" data-cursor="disable" rel="noreferrer" className="work-card-link">
                <div className="work-info glass-card">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div className="work-title-meta">
                      <h4>{project.title}</h4>
                      <p className="work-category">{project.category}</p>
                    </div>
                  </div>
                  <div className="work-details">
                    <span className="work-details-label">Tools and features</span>
                    <div className="work-tags">
                      {project.tools.split(",").map((tool, idx) => (
                        <span key={idx} className="work-tag">
                          {tool.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="work-card-action">
                    <span>View Project</span>
                    <FiArrowUpRight />
                  </div>
                </div>
                <div className="work-image-wrapper">
                  <WorkImage image={project.image} alt={project.title} />
                </div>
              </a>
            </div>
          ))}
          <div className="work-box last-box">
            <div className="work-more">
              <a href={PORTFOLIO.urls.moreProjects} target="_blank" data-cursor="disable" rel="noreferrer">
                <span>View More on GitHub</span>
                <FiArrowUpRight className="view-more-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
