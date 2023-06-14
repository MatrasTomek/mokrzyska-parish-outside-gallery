import React, { useContext } from "react";
import { StoreContext } from "../../Store/StoreProvider";
import { Link } from "react-router-dom";
import BoxesViev from "./components/BoxesViev";
import MainViev from "./components/MainViev";
import GridViev from "./components/GridViev";
import NewsView from "./components/NewsView";
import RodoBanner from "../../components/RodoBanner/RodoBanner";
// import Temporary from "..//Temporary/Temporary";

import styles from "./startViev.module.scss";

const StartViev = () => {
  const { vievBanner, setVievBanner } = useContext(StoreContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>

      <div className={styles.inside}>
        <BoxesViev />
      </div>
      <div className={styles.mainInfo}>
        <MainViev />
      </div>
      <div className={styles.inside}>
        <div className={styles.bigInfo}>
          <Link to="/naszKosciol">Zobacz Nasz Kościół</Link>
        </div>
        <div className={styles.gridInfo}>
          <GridViev />
        </div>
      </div>
      <div className={styles.insida}>
        <NewsView />
      </div>
      {vievBanner === true ? <RodoBanner setVievBanner={setVievBanner} /> : ""}
    </div>
  );
};

export default StartViev;
