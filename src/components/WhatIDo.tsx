import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { PORTFOLIO } from "../data/portfolioData";
import { FiCode, FiLayers, FiTrendingUp, FiArrowDown } from "react-icons/fi";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  const setArrowRef = (el: HTMLDivElement | null, index: number) => {
    arrowRef.current[index] = el;
  };

  useEffect(() => {
    containerRef.current.forEach((container) => {
      if (container) {
        const handler = (e: MouseEvent) => {
          e.stopPropagation();
          handleClick(container);
        };
        container.addEventListener("click", handler);
        container.style.cursor = "pointer";
      }
    });
  }, []);

  // Map service index to custom icons
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FiCode className="service-icon" />;
      case 1:
        return <FiLayers className="service-icon" />;
      case 2:
        return <FiTrendingUp className="service-icon" />;
      default:
        return <FiCode className="service-icon" />;
    }
  };

  return (
    <div className="whatIDO" id="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          {PORTFOLIO.services.map((service, index) => (
            <div
              key={index}
              className="what-content glass-card"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1={index === 0 ? "0" : "100%"}
                    x2="100%"
                    y2={index === 0 ? "0" : "100%"}
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <div className="what-header-row">
                  {getServiceIcon(index)}
                  <h3>{service.title.toUpperCase()}</h3>
                </div>
                <h4 className="description-label">Description</h4>
                <p className="service-desc">{service.description}</p>
                <div 
                  className="what-arrow" 
                  ref={(el) => setArrowRef(el, index)}
                >
                  <FiArrowDown className="arrow-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
