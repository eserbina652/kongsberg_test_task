import React from "react";
import HomeButton from "../components/buttons/HomeButton";

const Home = () => {
  return (
    <div data-testid={"home-page"}>
      <HomeButton text="Go to the table" path="/characters" />
      <HomeButton text="Go to the preview" path="/" />
    </div>
  );
};

export default Home;
