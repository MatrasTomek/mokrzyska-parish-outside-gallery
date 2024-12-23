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

          <p className={styles.sentence}

     >„Niech Duch Świętej Rodziny z Nazaretu
panuje we wszystkich chrześcijańskich domach”
św. Jan Paweł II</p>
<p>W tajemnicy Narodzenia Syna Bożego kieruję najlepsze życzenia do Moich Parafian i Ludzi otwartego serca.</p>
<p>Niech to wydarzenie, które jest wołaniem Boga o miłość między ludźmi, o zrozumienie, wybaczenie i zgodę, o pokój i przyjaźń w Chrystusie – przemieni nasze serca.</p>
<p>Niech Boże Dziecię będzie źródłem wszelkich darów, niech błogosławi i opromieni swą łaską wszystkie dni Nowego Roku 2025!.</p>

  <p className={styles.sign1}>Szczęść Boże!</p>
<p className={styles.sign1}>
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
