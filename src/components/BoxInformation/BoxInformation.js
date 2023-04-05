import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./box.module.scss";

const BoxInformation = () => {
  const [flag, setFlag] = useState(true);

  const history = useHistory();

  // const handleOnGoToSite = () => {
  //   setFlag(false);
  //   history.push("/temporary");
  //   setFlag(false);
  // };

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
          <h1> Chrystus Zmartwychwstał Alleluja!</h1>
          <p>
            Kochani Parafianie! Z okazji Świąt Wielkanocnych życzę, aby
            Zmartwychwstały Chrystus był blisko Waszych serc i napełnił je
            wiarą, nadzieją i miłością. Niech czas Wielkanocny, rozświetli mroki
            zwątpienia Jasnością Wiary, zabarwi szare dni Kolorami Nadziei,
            rozgrzeje zmarzniętą duszę Płomieniem Miłości. Nie lękajcie się
            pustego grobu Chrystusa.
          </p>
          <p>Z darem modlitwy</p>
          <p>Ks. Stanisław Tokarski - Proboszcz</p>
          {/* <Button name="zobacz program rekolekcji" onClick={handleOnGoToSite} /> */}
          <div className={styles.buttons}>
            <Button name="zamknij" onClick={handleCloseButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxInformation;
