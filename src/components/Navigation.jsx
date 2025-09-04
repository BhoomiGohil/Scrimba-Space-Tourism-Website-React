import { NavLink } from "react-router-dom";
import data from "../data.json";

const Navigation = () => {
  var { navItems } = data;

  return (
    <div className="navigation flex-between-center">
      <img src="/assets/shared/logo.svg" className="logo" />
      <div className="navigation-divider divider-white"></div>
      <input type="checkbox" id="navigation-mobile-menu-button" />
      <label
        htmlFor="navigation-mobile-menu-button"
        className="navigation-mobile-menu"
      ></label>
      <div className="navigation-menu-container flex-align-center">
        {navItems.map((element, index) => (
          <NavLink
            key={index}
            to={element.url}
            className={({ isActive }) =>
              `navigation-menu ${
                isActive ? "active" : ""
              } flex-align-center fs-8 ff-barlow-cond letter-spacing-2 uppercase`
            }
          >
            <span className="bold letter-spacing-207">
              {String(index).padStart(2, "0")}
            </span>
            {element.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
