import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import SingleCharacter from "../../pages/SingleCharacter";
import AllCharacters from "../../pages/AllCharacters";

const AppRouter = () => {
  const data = localStorage.getItem("singleCharacter");
  const id = data ? JSON.parse(data).id : null;
  console.log("APP_ROUTER", id);
  return (
    <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path={"/characters"} element={<AllCharacters />} />
      {/*{data && (*/}
      <Route path={`/additionalInfo:id`} element={<SingleCharacter />} />
      {/*)}*/}
    </Routes>
  );
};

export default AppRouter;
