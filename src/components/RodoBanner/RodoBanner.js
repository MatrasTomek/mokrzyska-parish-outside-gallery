import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Buttons/Button";

import styles from "./rodoBanner.module.scss";

const RodoBanner = ({ setVievBanner }) => {
  const handleSetCookie = () => {
    const data = new Date();
    const days = 21;
    data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `accessForParafiaMokrzyska; path=/; expires=${data}`;
    setVievBanner(false);
  };
  // max-age=2592000000
  const handleOnClose = () => {
    setVievBanner(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.info}>
          <p>
            Strona używa ciasteczek (cookies). Wyrażam zgodę na wykorzystywanie
            cookies, zgodnie z ustawieniami mojej przeglądarki. Poznaj naszą
            <Link to="/rodo"> politykę cookie.</Link>
          </p>
        </div>
        <Button name="zgoda" onClick={handleSetCookie} />
        <div onClick={handleOnClose} className={styles.image}></div>
      </div>
    </div>
  );
};

export default RodoBanner;
