import React from "react";
import { colors } from "../constants/colors";

function EyeView({ data, handleView }) {
  return (
    <div className="eye-view">
      <button
        className="control-btn-revert"
        style={{
          color: colors.controlBTN,
          backgroundColor: colors.controlRevertBTN,
          alignSelf: "flex-end",
          width: "40px",
        }}
        onClick={handleView}
      >
        X
      </button>
      <table>
        <tbody>
          {customData.labels.map((label, index) => (
            <tr key={index}>
              <td style={{ fontWeight: "bolder" }}>{label}:</td>
              <td style={{ fontWeight: "lighter", fontSize: "12px" }}>
                {customData.data[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EyeView;

const customData = {
  labels: [
    "Connected Calls",
    "Leads",
    "Doorknocks - Face to Face connects",
    "Leads",
    "Market Appraisals Booked",
    "Address",
    "Source",
    "Listing Presentations",
    "Address",
    "Listings - Agency Agreement Signed",
    "Address",
    "Method",
    "Listing Type",
    "Offers Recieved",
    "Address",
    "Amount",
    "Auction",
    "Address",
    "Result",
    "Outcome",
    "Exchanged Contracts",
    "Address",
    "Method",
    "Commission",
    "Percentage",
    "Price",
    "Settlements",
    "Address",
    "Inspections Private Buyer Inspections",
    "Address",
    "Attendance",
    "Open Home",
    "Address",
    "Attendance",
  ],
  data: [
    3,
    3,
    5,
    8,
    "",
    "abc",
    "Referrel",
    "def",
    "Doorknock",
    "",
    "123 Eagle St, Brisbane City QLD 4000, Australia",
    "",
    "abc",
    "Private Treaty",
    "",
    "",
    "def",
    75384,
    "",
    "ghi",
    34534,
    "Passed In",
    "",
    "jkl",
    "Unconditional",
    34533,
    3,
    34534,
    "",
    "mno",
    "",
    "yza",
    34,
    "",
    "abc",
    30,
  ],
};
