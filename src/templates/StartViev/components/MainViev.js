import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../Store/StoreProvider";
import styles from "./mainViev.module.scss";

const ITEMS = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const MainViev = () => {
  const { news } = useContext(StoreContext);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % ITEMS.length);
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChangeLeft = () => {
    setIndex((current) => Math.max(current - 1, 0));
  };
  const handleChangeRight = () => {
    setIndex((current) => Math.min(current + 1, ITEMS.length - 1));
  };

  const sliders = ITEMS.map((item) => (
    <div key={item.id} className={styles.image} style={{ left: item.id === index ? "0%" : "100%" }}>
      <div className={styles.news}>
        <h2>Aktualności: {!news ? "" : news[item.id].title}</h2>
        <p>{!news ? "" : news[item.id].dataOfAdd}</p>
        <p>{!news ? "" : news[item.id].informations}</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        {sliders}
        <div
          className={index === 0 ? styles.none : styles.left}
          onClick={handleChangeLeft}
        ></div>
        <div
          className={index === ITEMS.length - 1 ? styles.none : styles.right}
          onClick={handleChangeRight}
        ></div>
      </div>
    </div>
  );
};

export default MainViev;
