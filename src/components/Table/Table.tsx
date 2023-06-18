import React from "react";
import TableRow from "./TableRow";
import styles from "./Table.module.scss";
import { useGetAllCharactersQuery } from "../../api/api";
import { ICharacter } from "../../api/interfaces";
import { Nullable } from "../../types";

interface TableProps {
  selectedRow: Nullable<ICharacter>;
  onRowSelect: (row: Nullable<any>) => void;
}

const Table: React.FC<TableProps> = ({ selectedRow, onRowSelect }) => {
  const { data: characters } = useGetAllCharactersQuery();

  const handleRowClick = (row: ICharacter) => {
    onRowSelect(row);
  };

  return (
    <table data-testid={"table-component"} className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Species</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody data-testid={"table-row"}>
        {characters?.results.map((character: ICharacter) => (
          <TableRow
            key={character.id}
            data={character}
            onClick={() => handleRowClick(character)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
