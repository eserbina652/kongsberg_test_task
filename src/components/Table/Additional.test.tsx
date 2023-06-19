import React from "react";
import { render, screen } from "@testing-library/react";
import Additional from "./Additional";

test("renders additional information", () => {
  const data = {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  };

  render(<Additional data={data} />);

  const additionalHeaderElement = screen.getByText(
    "Additional information about Morty Smith"
  );
  const avatarElement = screen.getByAltText("Morty Smith");
  const genderElement = screen.getByText("Male");
  const originElement = screen.getByText("Earth");
  const statusElement = screen.getByText("Alive");

  expect(additionalHeaderElement).toBeInTheDocument();
  expect(avatarElement).toBeInTheDocument();
  expect(genderElement).toBeInTheDocument();
  expect(originElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
});
