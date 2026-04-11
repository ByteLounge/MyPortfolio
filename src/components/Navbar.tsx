import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";
import { useLoading } from "../context/LoadingProvider";
import { initialFX } from "./utils/initialFX";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const { isLoading } = useLoading();
  const isFirstRender = useRef(true);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  useEffect(() => {
    if (!isLoading && smoother) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        initialFX();
      }
      
      const links = document.querySelectorAll(".header ul a");
      links.forEach((elem) => {
        let element = elem as HTMLAnchorElement;
        // Remove existing listeners if any (simple approach for this logic)
        const newElement = element.cloneNode(true) as HTMLAnchorElement;
        element.parentNode?.replaceChild(newElement, element);
        
        newElement.addEventListener("click", (e) => {
          const section = newElement.getAttribute("data-href") || newElement.getAttribute("href");
          if (section && section.startsWith("#")) {
            e.preventDefault();
            smoother.paused(false);
            smoother.scrollTo(section, true, "top top");
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
