import React, { useState } from "react";
import Table from "../../../components/Table";

function AllSales() {
  const [tableData, setTableData] = useState({
    labels: ["Created At", "Action"],
    data: [
      ["2022-04-01"],
      ["2022-03-01"],
      ["2022-02-01"],
      ["2022-07-01"],
      ["2022-01-01"],
    ],
  });
  return (
    <Table
      heading="All Sales"
      data={tableData}
      showFilters={true}
      dashboard={"/dashboard/add-sales"}
    />
  );
}

export default AllSales;
