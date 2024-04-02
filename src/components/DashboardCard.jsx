import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../constants/colors";

function DashboardCard({ heading, value, percentage, text, color, bgColor }) {
  return (
    <div className="dashboard-card" style={{ backgroundColor: bgColor }}>
      <div className="card-row">
        <div
          className="percentage"
          style={{ color: colors.white, backgroundColor: color }}
        >
          {percentage}%
        </div>
        <div className="card-header-text" style={{ color: colors.dimText }}>
          {text}
        </div>
      </div>
      <div className="card-row">
        <FontAwesomeIcon
          icon={faMoneyBill}
          className="dashboard-card-icon"
          fontSize="25px"
        />
        <h3 className="dashboard-card-value">${value}</h3>
      </div>
      <h4 className="dashboard-card-title">{heading}</h4>
    </div>
  );
}

export default DashboardCard;
