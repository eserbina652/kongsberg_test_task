import React, { useState } from "react";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Table from "./components/Table/Table";
import styles from "./App.module.scss";
import NavBar from "./components/navBar/NavBar";
import AppRouter from "./components/routes/AppRouter";

function App() {
  const handleBreadcrumbNavigation = (index: number) => {};

  return (
    <div className={styles.appFont}>
      <NavBar />
      {/*<Breadcrumb*/}
      {/*  path={["Home", "Folder", "Subfolder"]}*/}
      {/*  onNavigate={handleBreadcrumbNavigation}*/}
      {/*/>*/}
      {/*<Table selectedRow={selectedRow} onRowSelect={setSelectedRow} />*/}
      <AppRouter />
    </div>
  );
}

export default App;
