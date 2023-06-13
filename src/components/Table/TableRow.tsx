import React from 'react';

interface TableRowProps {
    data: any; // Replace with your specific row data type
    onClick: () => void;
    isSelected: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ data, onClick, isSelected }) => {
    const rowStyles = {
        background: isSelected ? 'lightblue' : 'white', // Apply selected row style
        cursor: 'pointer',
    };

    return (
        <tr style={rowStyles} onClick={onClick}>
            <td>{data.id}</td>
            <td>{data.author}</td>
            <td>{data.title}</td>
            <td>{data.kind}</td>
            {/* Render additional relevant data */}
        </tr>
    );
};

export default TableRow;