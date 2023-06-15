import React, {useState} from 'react';
import styles from './Table.module.scss'
import {useOutsideClick} from "../../hooks/detectedClick";
import {ICharacter} from "../api/interfaces";
import Additional from "./Additional";

interface TableRowProps {
    data: ICharacter
    onClick: () => void;
    isSelected: boolean;
}

const TableRow: React.FC<TableRowProps> = ({data, onClick, isSelected}) => {
    const [isVisible, setIsVisible] = useState(false)
    const handleOpen = () => {
        setIsVisible(!isVisible)
    }

    const handleClose = () => {
        setIsVisible(false)
    }

    const ref = useOutsideClick(handleClose)

    return (
        <>
            {/*@ts-ignore*/}
            <tr ref={ref} className={`${styles.container} ${isVisible ? styles.selected : ''}`} onClick={() => {
                onClick()
                handleOpen()
            }}>
                <td>{data.name}</td>
                <td>{data.id}</td>
                <td>{data.species}</td>
                <td>{data.location.name}</td>
            </tr>
            {isVisible && <>
                <tr className={styles.additional_info}>
                    <th className={styles.additional_header} colSpan={4}>
                        Additional information about {data.name}
                    </th>
                </tr>
                <tr className={styles.additional_info}>
                    <th>Avatar</th>
                    <th>Gender</th>
                    <th>Born Place</th>
                    <th>Status</th>
                </tr>
                <Additional key={data.id} data={data}/>
            </>}
        </>
    );
};

export default TableRow;