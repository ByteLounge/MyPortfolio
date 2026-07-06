import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import "./styles/Navbar.css";
import { useLoading } from "../context/LoadingProvider";
import { initialFX } from "./utils/initialFX";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const { isLoading } = useLoading();
  const isFirstRender = useRef(true);
  
  // Theme & Menu states
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Initialize theme from localstorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      const defaultTheme = prefersLight ? "light" : "dark";
      setTheme(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, []);

  // Handle Theme Change
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  // Section highlight observer
  useEffect(() => {
    if (isLoading) return;

    const sections = ["landingDiv", "about", "work", "techstack", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [isLoading]);

  // Initial animations
  useEffect(() => {
    if (!isLoading) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        initialFX();
      }
    }
  }, [isLoading]);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: targetElement, offsetY: targetId === "landingDiv" ? 0 : 40 },
        ease: "power4.out",
      });
    }
  };

  return (
    <>
      <header className="header-capsule">
        <a 
          href="#landingDiv" 
          className="navbar-logo" 
          onClick={(e) => handleNavClick(e, "landingDiv")}
          data-cursor="disable"
        >
          Yash<span>.</span>
        </a>

        {/* Desktop navigation menu */}
        <nav className="navbar-desktop">
          <ul>
            <li className={activeSection === "about" ? "active-link" : ""}>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li className={activeSection === "work" ? "active-link" : ""}>
              <a href="#work" onClick={(e) => handleNavClick(e, "work")}>
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li className={activeSection === "techstack" ? "active-link" : ""}>
              <a href="#techstack" onClick={(e) => handleNavClick(e, "techstack")}>
                <HoverLinks text="TECH" />
              </a>
            </li>
            <li className={activeSection === "contact" ? "active-link" : ""}>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          {/* Theme switcher toggle */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle dark/light theme"
            data-cursor="disable"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger toggle button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-cursor="disable"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile navigation side drawer */}
      <div className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
        <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li className={activeSection === "about" ? "active-link" : ""}>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                About
              </a>
            </li>
            <li className={activeSection === "work" ? "active-link" : ""}>
              <a href="#work" onClick={(e) => handleNavClick(e, "work")}>
                Work
              </a>
            </li>
            <li className={activeSection === "techstack" ? "active-link" : ""}>
              <a href="#techstack" onClick={(e) => handleNavClick(e, "techstack")}>
                Tech Stack
              </a>
            </li>
            <li className={activeSection === "contact" ? "active-link" : ""}>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
