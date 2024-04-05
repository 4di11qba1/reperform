import React, { useState } from "react";
import Table from "../../../components/Table";

function AllProperties() {
  const [tableData, setTableData] = useState({
    labels: ["User Name", "Created At", "Action"],
    data: [
      ["Adil", "2022-04-01"],
      ["Usama", "2022-03-01"],
      ["Ans", "2022-02-01"],
      ["Zain", "2022-07-01"],
      ["Ahmed", "2022-01-01"],
    ],
  });
  return (
    <Table
      heading="All Properties"
      data={tableData}
      showFilters={true}
      addDataRoute={"/dashboard/add-property"}
    />
  );
}

export default AllProperties;
