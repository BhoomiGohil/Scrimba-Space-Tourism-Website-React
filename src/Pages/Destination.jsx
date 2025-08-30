import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import DestinationContent from "../components/DestinationContent";

const Destination = () => {
  const desktop = "/assets/destination/background-destination-desktop.jpg";
  const tablet = "/assets/destination/background-destination-tablet.jpg";
  const mobile = "/assets/destination/background-destination-mobile.jpg";

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
      <DestinationContent />
    </div>
  );
};

export default Destination;
