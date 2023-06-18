import React from "react";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import styles from "./App.module.scss";
import NavBar from "./components/navBar/NavBar";
import AppRouter from "./components/routes/AppRouter";
import { BreadcrumbProvider } from "./hooks/useBreadcrumbContext";
function App() {
  return (
    // @ts-ignore
    <BreadcrumbProvider>
      <div className={styles.appFont}>
        <NavBar />
        <Breadcrumb />
        <AppRouter />
      </div>
    </BreadcrumbProvider>
  );
}

export default App;
