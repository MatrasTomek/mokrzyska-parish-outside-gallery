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

  let indexNo = index;
  const changeIndex = () => {
    indexNo++;
    if (indexNo === ITEMS.length) {
      indexNo = 0;
    }
    setIndex(indexNo);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeIndex();
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  });

  const handleChangeLeft = () => {
    if (indexNo > 0) {
      setIndex(index - 1);
    }
    if (indexNo === 0) {
      setIndex(0);
    }
  };
  const handleChangeRight = () => {
    if (indexNo >= 0) {
      setIndex(index + 1);
    }
    if (indexNo === 3) {
      setIndex(3);
    }
  };

  const sliders = ITEMS.map((item) => (
    <div key={item.id} className={styles.image} style={{ left: "100%" }}>
      <div className={styles.news}>
        <h2>Aktualności: {!news ? "" : news[item.id].title}</h2>
        <p>{!news ? "" : news[item.id].dataOfAdd}</p>
        <p>{!news ? "" : news[item.id].informations}</p>
      </div>
    </div>
  ));
  const slideShow = () => {
    sliders[index].props.style.left = "0%";
  };
  slideShow();

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        {sliders}
        <div
          className={index === 0 ? styles.none : styles.left}
          onClick={handleChangeLeft}
        ></div>
        <div
          className={index === 3 ? styles.none : styles.right}
          onClick={handleChangeRight}
        ></div>
      </div>
    </div>
  );
};

export default MainViev;
