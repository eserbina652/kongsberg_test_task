import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { useBreadcrumbContext } from "../../hooks/useBreadcrumbContext";

interface BreadcrumbContextType {
  addBreadcrumb: (to: string) => void;
}

const NavBar = () => {
  const { addBreadcrumb } = useBreadcrumbContext() as BreadcrumbContextType;
  const currentPath = useLocation();

  const handleNavigate = (to: string) => {
    addBreadcrumb(to);
  };
  return (
    <header data-testid={"navbar"} className={styles.navbar_header}>
      <div className={styles.navbar_wrap}>
        <Link
          data-testid={"home-link"}
          onClick={() => handleNavigate("/home")}
          className={
            currentPath.pathname === "/home"
              ? styles.links_active
              : styles.links
          }
          to={"/home"}
        >
          Home
        </Link>
        <Link
          data-testid="characters-link"
          onClick={() => handleNavigate("/characters")}
          className={
            currentPath.pathname === "/characters"
              ? styles.links_active
              : styles.links
          }
          to={"/characters"}
        >
          Characters
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
