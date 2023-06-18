import React from "react";
import HomeButton from "../components/buttons/HomeButton";

const Home = () => {
  return (
    <>
      <HomeButton text="Go to the table" path="/characters" />
      <HomeButton text="Go to the preview" path="/" />
    </>
  );
};

export default Home;
