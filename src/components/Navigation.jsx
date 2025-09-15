import { NavLink } from "react-router-dom";
import data from "../data.json";
import { useState } from "react";

const Navigation = () => {
  var { navItems } = data;

  var [visible, setVisible] = useState(false);

  return (
    <div className="navigation flex justify-between align-center">
      <a href="/index.html" className="logo"></a>
      <div className="navigation-divider divider-white"></div>
      <div
        className="navigation-menu-container flex justify-center"
        data-visible={visible}
      >
        {navItems.map((element, index) => (
          <NavLink
            key={index}
            to={element.url}
            className={({ isActive }) =>
              `navigation-menu ${
                isActive ? "active" : ""
              } flex align-center fs-8 ff-barlow-cond letter-spacing-2 uppercase text-white`
            }
          >
            <span className="bold letter-spacing-207">
              {String(index).padStart(2, "0")}
            </span>
            {element.name}
          </NavLink>
        ))}
      </div>
      <div
        className="navigation-mobile-menu column justify-between"
        onClick={() => {
          visible ? setVisible(false) : setVisible(true);
        }}
      >
        <div className="menu-lines divider-white"></div>
        <div className="menu-lines divider-white"></div>
        <div className="menu-lines divider-white"></div>
      </div>
    </div>
  );
};

export default Navigation;
