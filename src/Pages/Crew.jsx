import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import CrewContent from "../components/CrewContent";

import desktop from "../assets/crew/background-crew-desktop.jpg";
import tablet from "../assets/crew/background-crew-tablet.jpg";
import mobile from "../assets/crew/background-crew-mobile.jpg";

const Crew = () => {
  const [bg, setBg] = useState(desktop);

  useEffect(() => {
    const updateBackground = () => {
      var width = window.innerWidth;
      setBg(width <= 735 ? mobile : width <= 832 ? tablet : desktop);
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  });

  return (
    <div
      className="main"
      style={{
        background: `url(${bg}) no-repeat top/cover`,
        width: "100%",
        height: "100vh",
      }}
    >
      <Navigation />
      <CrewContent />
    </div>
  );
};

export default Crew;
