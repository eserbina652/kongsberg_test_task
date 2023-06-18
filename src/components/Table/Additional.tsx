import React from "react";
import styles from "./Table.module.scss";
import { ICharacter } from "../../api/interfaces";
import { useBreadcrumbContext } from "../../hooks/useBreadcrumbContext";

interface AdditionalProps {
  data: ICharacter;
}
interface BreadcrumbContextType {
  addBreadcrumb: (breadcrumb: string, options?: any) => void;
}

const Additional: React.FC<AdditionalProps> = ({ data }) => {
  const statusClass = data?.status?.toLowerCase();
  const { addBreadcrumb } = useBreadcrumbContext() as BreadcrumbContextType;
  const handleClick = () => {
    addBreadcrumb(`/characters/${data.id}`, { state: data.id });
  };
  if (!data) {
    return <div>SORRY PAGE IS NOT AVAILABLE</div>;
  }
  return (
    <>
      <tr className={styles.additional_info}>
        <th className={styles.additional_header_wrap} colSpan={4}>
          <div className={styles.additional_header}>
            Additional information about {data?.name}
            <div className={styles.button} onClick={() => handleClick()}>
              Open in another page
            </div>
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
