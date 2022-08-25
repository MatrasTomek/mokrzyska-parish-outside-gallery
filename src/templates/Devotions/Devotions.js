import React from "react";
import { DEVOTIONS_DATA } from "../../Data/devotionsData";

import styles from "./devotions.module.scss";

const Devotions = () => {
  const devotions = DEVOTIONS_DATA.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.inside}>
        <h1>NABOŻEŃSTWA</h1>
        <h3>Msze św. w niedziele:</h3>
        <p>w kościele parafialnym odprawiane są o:</p>
        <p>7:30, 10:30, 15:00</p>
        <h3>Msze św. w tygodniu:</h3>
        <p>w kościele parafialnym odprawiane są o:</p>
        <p>18:00,</p>
        <p>w soboty o godzinie 6.30</p>
        <h3>
          Msza święta z kazaniem dla dzieci – w każdą I niedzielę miesiąca z
          wyjątkiem wakacji o 10.30
        </h3>
        <h3>
          Nabożeństwa w parafii Najświętszego Serca Pana Jezusa w Mokrzyskach:
        </h3>
        <ul>{devotions}</ul>
        <h2>ODPUST PARAFIALNY</h2>
        <h3>Niedziela po Uroczystości Najświętszego Serca Pana Jezusa</h3>
      </div>
    </div>
  );
};

export default Devotions;
