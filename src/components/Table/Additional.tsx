import React, { useEffect, useState } from "react";
import styles from "./Table.module.scss";
import { ICharacter } from "../../api/interfaces";
import { useNavigate, useParams } from "react-router-dom";
interface AdditionalProps {
  data: ICharacter;
  isAllCharacters?: boolean;
}

const Additional: React.FC<AdditionalProps> = ({
  isAllCharacters = false,
  data,
}) => {
  const statusClass = data.status.toLowerCase();
  const navigate = useNavigate();
  const [personId, setPersonId] = useState(data.id);
  const handleClick = () => {
    console.log("ADDITIONAL", data.id);
    navigate(`/additionalInfo:${personId}`, { state: data });
  };

  useEffect(() => {
    setPersonId(data.id);
  }, [data]);

  return (
    <>
      <tr className={styles.additional_info}>
        <th className={styles.additional_header_wrap} colSpan={4}>
          <div className={styles.additional_header}>
            Additional information about {data.name}
            {isAllCharacters && (
              <button className={styles.button} onClick={handleClick}>
                Open in another page
              </button>
            )}
          </div>
        </th>
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
            src={data.image}
            alt={data.name}
          />
        </td>
        <td>{data.gender}</td>
        <td>{data.origin.name}</td>
        <td>{data.status}</td>
      </tr>
    </>
  );
};

export default Additional;
