import React from "react";
import { Routes, Route } from "react-router-dom";
import Table from "../../../components/Table";
import AddTarget from "./AddTarget";
import { useState } from "react";

function AllTargets({ user }) {
  const [tableData, setTableData] = useState({
    labels: [
      "From Date",
      "To Date",
      "Annual CGI Target",
      "Average Commission",
      "Number of Sales Required",
      "Number of Listings Required",
      "Listing Presentations Required",
      "No. Leads Required",
      "No. Calls Required",
      "No. Doorknocks Required",
      "Action",
    ],
    data: [
      [
        "2022-01-01",
        "2022-02-01",
        "120000",
        "150000",
        "130",
        "115",
        "12",
        "15",
        "13",
        "10",
      ],
      [
        "2022-03-01",
        "2022-04-01",
        "110000",
        "130000",
        "110",
        "100",
        "10",
        "12",
        "10",
        "8",
      ],
      [
        "2022-05-01",
        "2022-06-01",
        "140000",
        "160000",
        "140",
        "120",
        "15",
        "18",
        "15",
        "12",
      ],
      [
        "2022-07-01",
        "2022-08-01",
        "125000",
        "155000",
        "135",
        "118",
        "13",
        "16",
        "14",
        "11",
      ],
      [
        "2022-09-01",
        "2022-10-01",
        "130000",
        "145000",
        "120",
        "110",
        "11",
        "14",
        "12",
        "9",
      ],
      [
        "2022-11-01",
        "2022-12-01",
        "115000",
        "140000",
        "115",
        "105",
        "10",
        "13",
        "11",
        "8",
      ],
      [
        "2023-01-01",
        "2023-02-01",
        "135000",
        "160000",
        "145",
        "130",
        "14",
        "17",
        "14",
        "11",
      ],
      [
        "2023-03-01",
        "2023-04-01",
        "125000",
        "155000",
        "135",
        "118",
        "13",
        "16",
        "14",
        "11",
      ],
      [
        "2023-05-01",
        "2023-06-01",
        "130000",
        "145000",
        "120",
        "110",
        "11",
        "14",
        "12",
        "9",
      ],
      [
        "2023-07-01",
        "2023-08-01",
        "125000",
        "150000",
        "125",
        "115",
        "11",
        "14",
        "12",
        "9",
      ],
    ],
  });

  // Function to handle row deletion
  const handleDeleteRow = (index) => {
    console.log("Delete Row function called.");
    const newData = {
      ...tableData,
      data: tableData.data.filter((_, rowIndex) => rowIndex !== index),
    };
    setTableData(newData);
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Table
            heading={"All Targets"}
            data={tableData}
            onDeleteRow={handleDeleteRow}
            addDataRoute={"/dashboard/targets/add-target"}
          />
        }
      />
      <Route exact path="/add-target" element={<AddTarget user={user} />} />
    </Routes>
  );
}

export default AllTargets;
