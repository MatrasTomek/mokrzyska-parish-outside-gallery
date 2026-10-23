import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Buttons/Button";

import styles from "./rodoBanner.module.scss";

const RodoBanner = ({ setVievBanner }) => {
  const handleSetCookie = () => {
    const maxAge = 21 * 24 * 60 * 60;
    const secure = window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie = `accessForParafiaMokrzyska=true; path=/; max-age=${maxAge}; SameSite=Lax${secure}`;
    setVievBanner(false);
  };
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
