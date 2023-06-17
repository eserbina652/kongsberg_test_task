import React, { useEffect } from "react";
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

  useEffect(() => {}, []);

  const handleRowClick = (row: ICharacter) => {
    onRowSelect(row);
  };

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
        {characters?.results.map((character: ICharacter) => (
          <TableRow
            key={character.id}
            data={character}
            onClick={() => handleRowClick(character)}
            isSelected={character === selectedRow}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
