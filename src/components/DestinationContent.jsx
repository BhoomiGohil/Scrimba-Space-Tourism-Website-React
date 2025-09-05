import { useState } from "react";
import data from "../data.json";

const activeStyle = {
  borderColor: "hsl(var(--clr-white))",
};

const inActiveStyle = { borderColor: "transparent" };

const DestinationContent = () => {
  const { destinations } = data;

  const [activeIndex, setActiveIndex] = useState(0);

  var activeDestination = destinations[activeIndex];

  return (
    <div className="content-grid destination grid-align-center">
      <h5 className="numbered-title" style={{ gridColumn: "2/4" }}>
        <span>01</span> PICK YOUR DESTINATION
      </h5>
      <div className="content-image destination">
        <img
          src={activeDestination.images.webp}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="content-block destination column">
        <div className="tabs-menu-container">
          {destinations.map((element, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className="tabs-menu flex fs-8 ff-barlow-cond letter-spacing-2 uppercase"
                style={isActive ? activeStyle : inActiveStyle}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                {element.name}
              </div>
            );
          })}
        </div>
        <div className="flex column">
          <h2 className="content-name fs-2 ff-bellefair uppercase text-white">
            {activeDestination.name}
          </h2>
          <p className="content-description fs-9 ff-barlow text-light">
            {activeDestination.description}
          </p>
        </div>
        <div
          className="divider-white"
          style={{
            opacity: "25%",
          }}
        ></div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            className="flex column"
            style={{
              gap: "0.75rem",
            }}
          >
            <p className="fs-7 ff-barlow-cond letter-spacing-2 text-light uppercase">
              AVG. DISTANCE
            </p>
            <h6 className="content-distance fs-6 ff-bellefair text-white uppercase">
              {activeDestination.distance}
            </h6>
          </div>
          <div
            className="flex column"
            style={{
              gap: "0.75rem",
            }}
          >
            <p className="fs-7 ff-barlow-cond letter-spacing-2 text-light uppercase">
              Est. travel time
            </p>
            <h6 className="content-travel fs-6 ff-bellefair text-white uppercase">
              {activeDestination.travel}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
