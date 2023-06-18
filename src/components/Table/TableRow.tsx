import React, { useState } from "react";
import styles from "./Table.module.scss";
import { ICharacter } from "../../api/interfaces";
import Additional from "./Additional";

interface TableRowProps {
  data: ICharacter;
  onClick: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ data, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOpenClose = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <tr
        data-testid={"selected-row"}
        className={`${styles.container} ${isVisible ? styles.selected : ""}`}
        onClick={() => {
          onClick();
          handleOpenClose();
        }}
      >
        <td>{data.name}</td>
        <td>{data.id}</td>
        <td>{data.species}</td>
        <td>{data.location.name}</td>
      </tr>
      {isVisible && <Additional key={data.id} data={data} />}
    </>
  );
};

export default TableRow;
