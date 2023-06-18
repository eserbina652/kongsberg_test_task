import React from "react";
import { useLocation } from "react-router-dom";
import { useGetSingleCharacterQuery } from "../api/api";
import CharacterAllInfo from "../components/Table/CharacterAllInfo";

const SingleCharacter = () => {
  const dataID = useLocation();
  const { data: character } = useGetSingleCharacterQuery(dataID.state);
  if (!character) {
    return null;
  }
  return (
    <div data-testid={"single_character"}>
      <CharacterAllInfo character={character} />;
    </div>
  );
};

export default SingleCharacter;
