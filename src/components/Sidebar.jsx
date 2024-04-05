import React from "react";
import { logo } from "../assets";
import {
  faHome,
  faCalculator,
  faChevronRight,
  faChartLine,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import NavList from "./NavList";
import { colors } from "../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ openSidebar, handleSideBar }) {
  return (
    <div
      className={`sidebar ${!openSidebar && "close"}`}
      style={{
        width: openSidebar ? "260px" : "60px",
        background: colors.highlightedSurface,
      }}
    >
      <div
        className="logo-details"
        style={{ gridTemplateColumns: openSidebar ? "20% 80%" : "100%" }}
      >
        <img src={logo} style={{ display: openSidebar ? "block" : "none" }} />
        {/* <span className='logo-name' style={{display: openSidebar ? 'block' : 'none', color: colors.text}}>Reperform</span> */}
        <FontAwesomeIcon
          className="bars"
          icon={faBars}
          onClick={handleSideBar}
          style={{
            justifySelf: openSidebar ? "flex-end" : "center",
            color: colors.text,
          }}
        />
      </div>
      <ul className="nav-links">
        {navList.map((item, index) => (
          <NavList
            key={index}
            open={openSidebar}
            icon1={item.icon1}
            icon2={item.icon2}
            text={item.text}
            subItems={item.subItems}
            route={item.route}
          />
        ))}
      </ul>
    </div>
  );
}

//Overflow-X hidden

export default Sidebar;

const navList = [
  {
    icon1: faHome,
    icon2: null,
    text: "Dashboard",
    subItems: null,
    route: "/dashboard",
  },
  {
    icon1: faBullseye,
    icon2: faChevronRight,
    text: "Targets",
    subItems: [{ subText: "All Target", subRoute: "/dashboard/targets" }],
    route: null,
  },
  {
    icon1: faChartLine,
    icon2: faChevronRight,
    text: "Sales",
    subItems: [
      { subText: "Add Daily Activity", subRoute: "/dashboard/add-sales" },
      { subText: "Daily Activity Archive", subRoute: "/dashboard/all-sales" },
    ],
    route: null,
  },
  {
    icon1: faCalculator,
    icon2: faChevronRight,
    text: "Property Management",
    subItems: [
      { subText: "Add Daily Activity", subRoute: "/dashboard/add-property" },
      {
        subText: "Daily Activity Archive",
        subRoute: "/dashboard/all-properties",
      },
    ],
    route: null,
  },
];
