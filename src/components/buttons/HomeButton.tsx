import React from "react";
import styles from "../Table/Table.module.scss";
import { useBreadcrumbContext } from "../../hooks/useBreadcrumbContext";

interface HomeButtonProps {
  text: string;
  path: string;
}
const HomeButton = ({ text, path }: HomeButtonProps) => {
  //@ts-ignore
  const { addBreadcrumb } = useBreadcrumbContext();

  const handleClick = () => {
    addBreadcrumb(path);
  };
  return (
    <div className={styles.button_wrap}>
      <button
        data-testId={"home_button"}
        className={styles.button}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default HomeButton;
