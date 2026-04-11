import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
import { useLoading } from "../context/LoadingProvider";
import { initialFX } from "./utils/initialFX";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const { isLoading } = useLoading();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isLoading) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        initialFX();
      }
      
      const links = document.querySelectorAll(".header ul a");
      links.forEach((elem) => {
        let element = elem as HTMLAnchorElement;
        const newElement = element.cloneNode(true) as HTMLAnchorElement;
        element.parentNode?.replaceChild(newElement, element);
        
        newElement.addEventListener("click", (e) => {
          const section = newElement.getAttribute("data-href") || newElement.getAttribute("href");
          if (section && section.startsWith("#")) {
            e.preventDefault();
            gsap.to(window, {
              duration: 1.5,
              scrollTo: section,
              ease: "power3.inOut"
            });
          }
        });
      });
    }
  }, [isLoading]);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Yash.
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#techstack" href="#techstack">
              <HoverLinks text="TECH" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
