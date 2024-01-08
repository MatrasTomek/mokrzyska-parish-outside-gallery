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

          <p>ŻYCZENIA NOWOROCZNE
</p>
<p>Wszystkim Parafianom z okazji Nowego Roku, pragnę życzyć wiele łask Bożych, spokoju serca, wytrwałości w dobrych postanowieniach, zdrowia oraz dużo sił w drodze do świętości. Szczęśliwego Nowego Roku 2024.
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
