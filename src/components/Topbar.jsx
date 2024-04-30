import React from "react";
import { colors } from "../constants/colors";
import Drawer from "./Drawer";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Topbar({
  user,
  openDrawer,
  handleDrawer,
  openSidebar,
  handleSideBar,
}) {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handleDrawer();
      }
    };

    if (openDrawer) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDrawer]);

  return (
    <div
      className="topbar"
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
      }}
    >
      <div
        className="logo-details"
        style={{
          width: "100%",
          height: "100%",
          marginTop: "15px",
          zIndex: "9999",
          justifySelf: "flex-start",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          className="bars"
          icon={faBars}
          onClick={handleSideBar}
          style={{
            marginRight: "90%",
            fontSize: "20px",
            color: colors.text,
          }}
        />
      </div>
      <div className="topbar-content" onClick={handleDrawer}>
        <div className="user-name">{user.userName}</div>
        <div className="user-email hoverable" style={{ color: colors.dimText }}>
          {user.email}
        </div>
      </div>
      <Drawer
        user={user}
        open={openDrawer}
        drawerRef={drawerRef}
        handleDrawer={handleDrawer}
      />
    </div>
  );
}

export default Topbar;
