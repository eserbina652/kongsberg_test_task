import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterAllInfo from "./CharacterAllInfo";

test("renders character information", () => {
  const character = {
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

  render(<CharacterAllInfo character={character} />);

  const nameElement = screen.getByText("Morty Smith");
  const idElement = screen.getByText("2");
  const speciesElement = screen.getByText("Human");
  const avatarElement = screen.getByAltText("Morty Smith");
  const genderElement = screen.getByText("Male");
  const statusElement = screen.getByText("Alive");

  expect(nameElement).toBeInTheDocument();
  expect(idElement).toBeInTheDocument();
  expect(speciesElement).toBeInTheDocument();
  expect(avatarElement).toBeInTheDocument();
  expect(genderElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
});
