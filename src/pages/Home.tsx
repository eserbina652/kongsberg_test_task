import React from "react";
import styles from "../components/Table/Table.module.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/characters");
  };
  return (
    <div className={styles.button_wrap}>
      <button className={styles.button} onClick={handleClick}>
        Go to the table
      </button>
    </div>
  );
};

export default Home;
