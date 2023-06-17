import React, { useState } from "react";
import Table from "../components/Table/Table";

const AllCharacters = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  return <Table selectedRow={selectedRow} onRowSelect={setSelectedRow} />;
};

export default AllCharacters;
