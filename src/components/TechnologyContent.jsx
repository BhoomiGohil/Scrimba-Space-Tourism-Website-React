import { act, use, useState } from "react";
import data from "../data.json";

const activeStyle = {
  color: "hsl(var(--clr-dark))",
  backgroundColor: "hsl(var(--clr-white))",
  borderColor: "hsl(var(--clr-white))",
};

const inActiveStyle = {
  color: "inherit",
  backgroundColor: "transparent",
  borderColor: "hsl(var(--clr-white) / 0.25)",
};

const TechnologyContent = () => {
  const { technology } = data;

  const [activeIndex, setActiveIndex] = useState(0);

  var activeTechnology = technology[activeIndex];
  return (
    <div id="contentTechnology" className="main-content technology flex">
      <div className="content technology flex column justify-center">
        <h5 className="numbered-title">
          <span>03</span> Space Launch 101
        </h5>
        <div className="content-image technology-mobile flex">
          <img
            src={activeTechnology.images.landscape}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="content-grid technology flex align-center justify-between">
          <div className="content-block-container flex">
            <div className="large-pagination-container flex column">
              {technology.map((element, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    className="large-pagination fs-4 ff-bellefair flex justify-center align-center"
                    style={isActive ? activeStyle : inActiveStyle}
                    onClick={() => {
                      setActiveIndex(index);
                    }}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>
            <div className="content-block technology flex column justify-center">
              <h4 className="fs-4 ff-bellefair uppercase text-light">
                THE TERMINOLOGY…
              </h4>
              <div className="flex column">
                <h3 className="content-name fs-3 ff-bellefair uppercase text-white">
                  {activeTechnology.name}
                </h3>
                <p className="content-description fs-9 ff-barlow text-light">
                  {activeTechnology.description}
                </p>
              </div>
            </div>
          </div>
          <div className="content-image technology flex">
            <img
              src={activeTechnology.images.portrait}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyContent;
