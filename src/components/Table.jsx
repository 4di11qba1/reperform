import React from "react";
import { colors } from "../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Table({ heading, data, onDeleteRow, addDataRoute, showFilters }) {
  const nav = useNavigate();
  const handleDeleteRow = (index) => {
    onDeleteRow(index);
  };

  return (
    <div className="table-wrapper" style={{ backgroundColor: colors.white }}>
      <div className="table-header">
        <h2 style={{ color: colors.controlBTN }}>{heading}</h2>
        <div className="table-filters">
          {showFilters && (
            <>
              <div>
                <label htmlFor="filter-from-date" aria-label="From Date">
                  From Date
                </label>
                <input id="filter-from-date" type="date" />
              </div>
              <div>
                <label htmlFor="filter-to-date" aria-label="To Date">
                  To Date
                </label>
                <input id="filter-to-date" type="date" />
              </div>
            </>
          )}
          <button
            onClick={() => nav(addDataRoute)}
            className="control-btn-revert"
            style={{
              color: colors.controlBTN,
              backgroundColor: colors.controlRevertBTN,
            }}
          >
            + Add New
          </button>
        </div>
      </div>
      <table className="table">
        <tbody className="table-body">
          {/* Table Header */}
          <tr style={{ fontWeight: "bolder", position: "sticky" }}>
            {data.labels.map((label, labelIndex) => (
              <th key={labelIndex}>{label}</th>
            ))}
          </tr>
          {/* Table Body */}
          {data.data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                backgroundColor:
                  rowIndex % 2 === 0 ? colors.surface : colors.white,
              }}
            >
              {row.map((data, dataIndex) => (
                <td className="table-data" key={dataIndex}>
                  {data}
                </td>
              ))}
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDeleteRow(rowIndex)}
                  className="table-delete-icon"
                  style={{ color: colors.controlBTN }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
