import React, { useEffect, useState } from "react";
import styles from "./Table.module.scss";
import { useOutsideClick } from "../../hooks/detectedClick";
import { ICharacter } from "../../api/interfaces";
import Additional from "./Additional";

interface TableRowProps {
  data: ICharacter;
  onClick: () => void;
  isSelected: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ data, onClick, isSelected }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOpen = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    localStorage.setItem("singleCharacter", JSON.stringify(data));
  }, [data.id]);
  const handleClose = () => {
    setIsVisible(false);
  };

  const ref = useOutsideClick(handleClose);

  return (
    <>
      <tr
        ref={ref}
        className={`${styles.container} ${isVisible ? styles.selected : ""}`}
        onClick={() => {
          onClick();
          handleOpen();
        }}
      >
        <td>{data.name}</td>
        <td>{data.id}</td>
        <td>{data.species}</td>
        <td>{data.location.name}</td>
      </tr>
      {isVisible && (
        <Additional isAllCharacters={true} key={data.id} data={data} />
      )}
    </>
  );
};

export default TableRow;
