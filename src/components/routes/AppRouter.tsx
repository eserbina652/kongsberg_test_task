import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import SingleCharacter from "../../pages/SingleCharacter";
import AllCharacters from "../../pages/AllCharacters";
import DefaultPage from "../../pages/DefaultPage";

const AppRouter = () => {
  return (
    <div data-testid={"app-routes"}>
      <Routes>
        <Route path={"/"} element={<DefaultPage />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/characters"} element={<AllCharacters />} />
        <Route path={`/characters/:id`} element={<SingleCharacter />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
