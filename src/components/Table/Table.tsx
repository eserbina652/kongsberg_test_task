import React, {useEffect, useState} from 'react';
import TableRow from "./TableRow";

interface TableProps {
    selectedRow: any; // Replace with your specific row data type
    onRowSelect: (row: any) => void;
}

const Table: React.FC<TableProps> = ({ selectedRow, onRowSelect }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from API endpoint and update the data state
        // Example: fetch('API_ENDPOINT_URL').then(response => response.json()).then(data => setData(data));
    }, []);

    const handleRowClick = (row: any) => {
        // Handle row selection logic
        onRowSelect(row);
    };

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Author</th>
                <th>Title</th>
                <th>Kind</th>
                {/* Add additional relevant columns */}
            </tr>
            </thead>
            <tbody>
            {data.map((row: any) => (
                <TableRow key={row.id} data={row} onClick={() => handleRowClick(row)} isSelected={row === selectedRow} />
            ))}
            </tbody>
        </table>
    );
};

export default Table;