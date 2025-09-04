import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const Home = () => {
  const desktop = "/assets/home/background-home-desktop.jpg";
  const tablet = "/assets/home/background-home-tablet.jpg";
  const mobile = "/assets/home/background-home-mobile.jpg";
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
      className="main index"
      style={{
        background: `url(${bg}) no-repeat top/cover`,
        width: "100%",
        height: "100vh",
      }}
    >
      <Navigation />
      <Hero />
    </div>
  );
};

export default Home;
