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
     <h1>SPOWIEDŹ
PRZED UROCZYSTOŚCIĄ WSZYSTKICH ŚWIĘTYCH
</h1>
          {/* <p>

          </p>
          <p></p>
          <p></p>  */}
<div className={styles.exit}>     <Button name="X" onClick={handleCloseButton} /></div>
<div className={styles.look}>    <Button name="zobacz" onClick={handleOnGoToSite} /></div>



        </div>
      </div>
    </div>
  );
};

export default BoxInformation;
