import { useState } from "react";
import data from "../data.json";

const activeStyle = {
  opacity: "100%",
};

const inActiveStyle = { opacity: "17.44%" };

const CrewContent = () => {
  const { crew } = data;

  const [activeIndex, setActiveIndex] = useState(0);

  let activeCrew = crew[activeIndex];

  return (
    <div id="contentCrew" className="content-grid grid crew">
      <h5 className="numbered-title" style={{ gridColumn: "2/4" }}>
        <span>02</span>MEET YOUR CREW
      </h5>
      <div className="content-block crew flex column">
        <div
          className="flex column justify-center"
          style={{ gap: "2.5rem", flexGrow: "1" }}
        >
          <div className="flex column">
            <h4
              className="content-role fs-4 ff-bellefair uppercase text-white"
              style={{ opacity: "50.42%" }}
            >
              {activeCrew.role}
            </h4>
            <h3 className="content-name fs-3 ff-bellefair uppercase text-white">
              {activeCrew.name}
            </h3>
          </div>
          <p className="content-bio fs-9 ff-barlow text-light">
            {activeCrew.bio}
          </p>
        </div>
        <div className="small-pagination-container flex">
          {crew.map((element, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className="small-pagination bg-white"
                style={isActive ? activeStyle : inActiveStyle}
                onClick={() => setActiveIndex(index)}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="content-image crew justify-self-center align-self-end">
        <img src={"../" + activeCrew.images.webp} />
      </div>
    </div>
  );
};

export default CrewContent;
