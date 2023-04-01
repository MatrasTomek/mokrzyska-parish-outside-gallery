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
          <p>Rekolekcje Wielkopostne 2023 </p>
          <p>
            PARAFIA NAJŚWIĘTSZEGO SERCA PANA JEZUSA W MOKRZYSKACH. PROWADZĄCY –
            KS. dr hab. JÓZEF MŁYŃSKI
          </p>
          <p>
            Profesor Uniwersytetu Kardynała Stefana Wyszyńskiego w Warszawie
          </p>
          <Button name="zobacz program rekolekcji" onClick={handleOnGoToSite} />
          <div className={styles.buttons}>
            <Button name="zamknij" onClick={handleCloseButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxInformation;
