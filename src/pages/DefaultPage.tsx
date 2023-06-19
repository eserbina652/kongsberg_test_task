import React from "react";
import Welcome from "../components/Welcome";

const DefaultPage = () => {
  return (
    <div data-testid={"defaultPage"}>
      <Welcome />
    </div>
  );
};

export default DefaultPage;
