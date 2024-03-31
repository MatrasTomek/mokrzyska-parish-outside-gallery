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

          <p>Chrystus Zmartwychwstał Alleluja!
</p>
<p>Kochani Parafianie!
Z okazji Świąt Wielkanocnych życzę, aby Zmartwychwstały Chrystus był blisko naszych serc i napełnił je wiarą, nadzieją i miłością. Niech czas Wielkanocny, rozświetli mroki zwątpienia Jasnością Wiary, zabarwi szare dni Kolorami Nadziei, rozgrzeje zmarzniętą duszę Płomieniem Miłości. Nie lękajcie się pustego grobu Chrystusa.

</p>
<p>
Z darem modlitwy
Ks. Stanisław Tokarski - Proboszcz
</p>

<div className={styles.exit}>     <Button name="X" onClick={handleCloseButton} /></div>
{/* <div className={styles.look}>    <Button name="zobacz" onClick={handleOnGoToSite} /></div> */}



        </div>
      </div>
    </div>
  );
};

export default BoxInformation;
