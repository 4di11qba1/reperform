import React from "react";
import { colors } from "../constants/colors";
import Drawer from "./Drawer";
import { useState, useEffect, useRef } from "react";

function Topbar({ user, openDrawer, handleDrawer }) {
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
