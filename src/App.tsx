import React, {useState} from 'react';
import './App.css';
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Table from "./components/Table/Table";

function App() {
  const [selectedRow, setSelectedRow] = useState(null); // Update with your selected row state type

  const handleBreadcrumbNavigation = (index: number) => {
    // Handle breadcrumb navigation logic
    // Example: Fetch data for the selected level or update the hierarchy path
  };

  return (
      <div>
        <Breadcrumb path={['Home', 'Folder', 'Subfolder']} onNavigate={handleBreadcrumbNavigation} />
        <Table selectedRow={selectedRow} onRowSelect={setSelectedRow} />
      </div>
  );
};

export default App;
