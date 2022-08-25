import React from "react";

import styles from "./buttom.module.scss";

const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {name}
    </button>
  );
};

export default Button;
