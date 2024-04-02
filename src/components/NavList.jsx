import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../constants/colors";
import { useNavigate } from "react-router-dom";

function NavList({ icon1, icon2, text, subItems, open, route }) {
  const nav = useNavigate();

  const navigateToRoute = (r) => {
    nav(r);
  };

  const handleClick = () => {
    if (route) {
      navigateToRoute(route);
    }
  };

  return (
    <li
      className="nav-item-link"
      style={{ padding: open ? "0 20px" : "0 10px" }}
      onClick={handleClick}
    >
      <div className="nav-links-div">
        <FontAwesomeIcon
          icon={icon1}
          className="nav-icon"
          style={{ color: colors.text }}
        />
        <span
          className="link-name"
          style={{ color: colors.text, display: open ? "block" : "none" }}
        >
          {text}
        </span>
        {icon2 && (
          <FontAwesomeIcon
            icon={icon2}
            style={{
              display: open ? "block" : "none",
              color: colors.text,
              justifySelf: "flex-end",
            }}
          />
        )}
      </div>
      {subItems && (
        <ul
          className="sub-menu"
          style={{
            width: !open && "260px",
            background: colors.highlightedSurface,
          }}
        >
          {subItems.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => navigateToRoute(item.subRoute)}
                style={{ color: colors.text }}
              >
                <div></div>
                {item.subText}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavList;
