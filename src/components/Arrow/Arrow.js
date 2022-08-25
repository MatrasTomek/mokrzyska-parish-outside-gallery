import React, { useEffect, useState } from "react";

import styles from "./arrow.module.scss";

const Arrow = () => {
  const [windowScroll, setWindowScroll] = useState(false);
  const handleGoToTopPage = () => {
    window.scrollTo(0, 0);
  };
  const arrowViev = () => {
    if (!windowScroll) {
      return;
    }
    if (windowScroll) {
      return <div onClick={handleGoToTopPage} className={styles.icon}></div>;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setWindowScroll(true);
      } else {
        setWindowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setWindowScroll]);

  return <div className={styles.wrapper}>{arrowViev()}</div>;
};
export default Arrow;
