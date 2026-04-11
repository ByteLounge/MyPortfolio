import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { PORTFOLIO } from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Location</h4>
            <p>{PORTFOLIO.person.location}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={PORTFOLIO.links.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={PORTFOLIO.links.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={PORTFOLIO.links.instagram}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href={PORTFOLIO.links.blogspot}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Blogspot <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{PORTFOLIO.person.name}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
