import { useState } from "react";
import "./styles/WhatIDo.css";
import { PORTFOLIO } from "../data/portfolioData";
import { FiCode, FiLayers, FiTrendingUp, FiArrowDown } from "react-icons/fi";

const WhatIDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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
          {PORTFOLIO.services.map((service, index) => {
            const isActive = activeIndex === index;
            const isSibling = activeIndex !== null && !isActive;

            return (
              <div
                key={index}
                className={`what-content glass-card ${
                  isActive ? "what-content-active" : isSibling ? "what-sibling" : ""
                }`}
                onClick={() => toggleIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleIndex(index);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="what-content-in">
                  <div className="what-header-row">
                    {getServiceIcon(index)}
                    <h3>{service.title.toUpperCase()}</h3>
                  </div>
                  <h4 className="description-label">Description</h4>
                  <p className="service-desc">{service.description}</p>
                  <div className="what-arrow" aria-hidden="true">
                    <FiArrowDown className="arrow-icon" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

