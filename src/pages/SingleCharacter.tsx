import React from "react";
import Additional from "../components/Table/Additional";
import { useLocation } from "react-router-dom";

const SingleCharacter = () => {
  const data = useLocation();
  return (
    <div>
      {/*  @ts-ignore*/}
      <Additional data={data} />
    </div>
  );
};

export default SingleCharacter;
