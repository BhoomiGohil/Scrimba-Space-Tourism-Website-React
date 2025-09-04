import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import TechnologyContent from "../components/TechnologyContent";

const Technology = () => {
  const desktop = "/assets/technology/background-technology-desktop.jpg";
  const tablet = "/assets/technology/background-technology-tablet.jpg";
  const mobile = "/assets/technology/background-technology-mobile.jpg";
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
      <TechnologyContent />
    </div>
  );
};

export default Technology;
