import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Buttons/Button";

import styles from "./gridViev.module.scss";

const GridViev = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/majowka_2023/1.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
              Nabożeństwo Majowe 27 maja 2023 roku przy kapliczce Matki Bożej na
              ulicy Stanisławskiej.
            </h4>
          </div>
          <Link to="/majowka_23">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/imienimy_2023/12.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Imieniny Księdza Proboszcza Stanisława - Mokrzyska 7.5.2023</h4>
          </div>
          <Link to="/imieniny">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/medale_caritas_2023/9.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>Diecezjalne Święto Caritas</h4>
          </div>
          <Link to="/caritas_23">
            <Button name="zobacz" />
          </Link>
        </div>
        <div className={styles.element}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(images/hala_2023/42.jpg)`,
            }}
          ></div>
          <div className={styles.info}>
            <h4>
              Uroczystość oddania i poświęcenia Hali sportowej w Mokrzyskach. 13
              IV 2023 rok.
            </h4>
          </div>
          <Link to="/hala_23">
            <Button name="zobacz" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridViev;
