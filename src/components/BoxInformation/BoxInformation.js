import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./box.module.scss";

const BoxInformation = () => {
  const [flag, setFlag] = useState(true);

  const history = useHistory();

  const handleOnGoToSite = () => {
    setFlag(false);
    history.push("/temporary");
    setFlag(false);
  };

  const handleCloseButton = () => {
    setFlag(false);
  };
  return (
    <div
      className={styles.wrapper}
      style={{
        display: `${flag ? "block" : "none"}`,
      }}
    >
      <div className={styles.inside}>
        <div className={styles.info}>
          {/* <h1> </h1>
          <p>

          </p>
          <p></p>
          <p></p> */}
          <div className={styles.buttons}>
            {/* <Button name="zobacz" onClick={handleOnGoToSite} /> */}
            <Button name="zamknij" onClick={handleCloseButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxInformation;
