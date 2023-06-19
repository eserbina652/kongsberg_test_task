import React from "react";
import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";

const mockData = {
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

describe("TABLE_ROW TEST", () => {
  test("renders the TableRow component", () => {
    render(<TableRow data={mockData} onClick={() => {}} />);

    const tableRow = screen.getByTestId("selected-row");
    expect(tableRow).toBeInTheDocument();
  });

  test("displays the correct data in the table cells", () => {
    render(<TableRow data={mockData} onClick={() => {}} />);

    const nameCell = screen.getByText("Morty Smith");
    const idCell = screen.getByText("2");
    const speciesCell = screen.getByText("Human");
    const locationCell = screen.getByText("Earth");

    expect(nameCell).toBeInTheDocument();
    expect(idCell).toBeInTheDocument();
    expect(speciesCell).toBeInTheDocument();
    expect(locationCell).toBeInTheDocument();
  });
});
