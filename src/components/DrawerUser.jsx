import React from "react";
import { colors } from "../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function DrawerUser({ user }) {
  const nav = useNavigate();
  return (
    <div className="drawer-user">
      <div
        className="drawer-user-name hoverable"
        onClick={() => nav("/dashboard/user")}
      >
        {user.userName}
      </div>
      <div
        className="drawer-user-email hoverable"
        style={{ color: colors.dimText }}
      >
        <FontAwesomeIcon
          className="drawer-user-email-icon"
          icon={faEnvelope}
          style={{ color: colors.controlBTN }}
        />
        {user.email}
      </div>
      <button
        className="control-btn-revert"
        style={{
          color: colors.controlBTN,
          backgroundColor: colors.controlRevertBTN,
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default DrawerUser;
