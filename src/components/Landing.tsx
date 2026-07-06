import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { PORTFOLIO } from "../data/portfolioData";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { TbMessage } from "react-icons/tb";

const Landing = ({ children }: PropsWithChildren) => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        {/* Left Side / Top Center: Profile Card */}
        <div className="hero-profile-card glass-card">
          <div className="profile-badge">
            <img 
              src={PORTFOLIO.person.avatarUrl} 
              alt={PORTFOLIO.person.name} 
              className="profile-avatar"
              loading="eager"
            />
            <span className="availability-dot"></span>
          </div>

          <div className="hero-text-content">
            <span className="hero-subtitle">WELCOME TO MY PORTFOLIO</span>
            <h1 className="hero-title">
              {PORTFOLIO.person.name.split(" ")[0]}
              <span className="accent-text"> {PORTFOLIO.person.name.split(" ")[1]}</span>
            </h1>
            <h2 className="hero-tagline">{PORTFOLIO.person.tagline}</h2>
            <p className="hero-desc">{PORTFOLIO.person.title}</p>
          </div>

          <div className="hero-actions">
            <a 
              href={PORTFOLIO.urls.cvDownload} 
              target="_blank" 
              className="btn btn-primary"
              data-cursor="disable"
            >
              <FiDownload /> {PORTFOLIO.person.cvCtaLabel}
            </a>
            <a 
              href="#contact" 
              onClick={handleContactClick} 
              className="btn btn-secondary"
              data-cursor="disable"
            >
              <TbMessage /> {PORTFOLIO.person.contactCtaLabel}
            </a>
          </div>
        </div>

        {/* 3D Model Placeholder Container for Mobile Layout */}
        <div className="mobile-model-container">
          {children}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="mouse-wheel">
            <FiArrowDown className="arrow-down-animate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
