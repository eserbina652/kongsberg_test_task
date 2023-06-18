import React from "react";
import styles from "./Table.module.scss";
import { ICharacter } from "../../api/interfaces";

interface CharacterAllInfoProps {
  character: ICharacter;
}
const CharacterAllInfo = ({ character }: CharacterAllInfoProps) => {
  const statusClass = character.status.toLowerCase();
  return (
    <table className={styles.table} data-testid="table">
      <thead className={styles.thead}>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Species</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{character.name}</td>
          <td>{character.id}</td>
          <td>{character.species}</td>
          <td>{character.location.name}</td>
        </tr>
        <tr className={styles.additional_info}>
          <th>Avatar</th>
          <th>Gender</th>
          <th>Born Place</th>
          <th>Status</th>
        </tr>
        <tr className={styles.unVisibleBlock}>
          <td className={styles.table_img}>
            <img
              className={`${styles.img} ${styles[statusClass]}`}
              src={character.image}
              alt={character.name}
            />
          </td>
          <td>{character.gender}</td>
          <td>{character.origin.name}</td>
          <td>{character.status}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CharacterAllInfo;
