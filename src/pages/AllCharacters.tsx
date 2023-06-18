import React, { useState } from "react";
import Table from "../components/Table/Table";

const AllCharacters = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  return (
    <div data-testid={"allCharacters"}>
      <Table selectedRow={selectedRow} onRowSelect={setSelectedRow} />
    </div>
  );
};

export default AllCharacters;
