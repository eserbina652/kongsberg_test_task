import React from 'react';
import styles from "./Table.module.scss";
import {ICharacter} from "../api/interfaces";

interface AdditionalProps {
    data: ICharacter
}

const Additional: React.FC<AdditionalProps> = ({data}) => {
    const statusClass = data.status.toLowerCase();
    return (
        <tr className={styles.unVisibleBlock}>
            <td className={styles.table_img}>
                <img className={`${styles.img} ${styles[statusClass]}`} src={data.image} alt={data.name}/>
            </td>
            <td>
                {data.gender}
            </td>
            <td>
                {data.origin.name}
            </td>
            <td>
                {data.status}
            </td>
        </tr>
    );
};

export default Additional;