import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let data = localStorage.getItem("singleCharacter");
  // @ts-ignore
  const { id } = JSON.parse(data);

  const [personId, setPersonId] = useState(id);

  useEffect(() => {
    setPersonId(id);
  }, [data]);
  console.log("NAVBAR", personId);
  return (
    <div>
      <Link to={"/home"}>Home</Link>
      <Link to={"/characters"}>Characters</Link>
      <Link to={`/additionalInfo:${personId}`}>Additional</Link>
    </div>
  );
};

export default NavBar;
