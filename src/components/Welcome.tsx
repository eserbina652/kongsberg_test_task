import React from "react";
import styles from "./Welcome.module.scss";
const Welcome = () => {
  return (
    <div data-testid={"welcome-component"}>
      <div className={styles.main_text}>
        WELCOME TO MY TEST TASK FROM Kongsberg Maritime! <br />
        CLICK ON THE HOME TO BEGIN WATCHING MY WORK
      </div>
      <div className={styles.main_text}>
        Thank you beforehand for your attention!
      </div>
    </div>
  );
};

export default Welcome;
