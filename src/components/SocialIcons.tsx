import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import { PORTFOLIO } from "../data/portfolioData";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a
            href={PORTFOLIO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            data-cursor="disable"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href={PORTFOLIO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            data-cursor="disable"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href={PORTFOLIO.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            data-cursor="disable"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={PORTFOLIO.urls.cvDownload}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
