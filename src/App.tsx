import React, {useState} from 'react';
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Table from "./components/Table/Table";
import styles from './App.module.scss'

function App() {
    const [selectedRow, setSelectedRow] = useState(null);
    const handleBreadcrumbNavigation = (index: number) => {

    };

    return (
        <div className={styles.appFont}>
            <Breadcrumb path={['Home', 'Folder', 'Subfolder']} onNavigate={handleBreadcrumbNavigation}/>
            <Table selectedRow={selectedRow} onRowSelect={setSelectedRow}/>
        </div>
    );
};

export default App;
