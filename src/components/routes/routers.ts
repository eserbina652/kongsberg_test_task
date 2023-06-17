import Home from "../../pages/Home";
import AllCharacters from "../../pages/AllCharacters";
import SingleCharacter from "../../pages/SingleCharacter";

export default [
  { path: "/home", name: "Home", Component: Home },
  { path: "/home/characters", name: "Characters", Component: AllCharacters },
  {
    path: "/home/characters/:idCharacter",
    name: "Single Character",
    Component: SingleCharacter,
  },
];
