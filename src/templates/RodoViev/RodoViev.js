import React from "react";

import { RODO_AND_COOKIE } from "../../Data/Rodo";

import styles from "./rodoViev.module.scss";

const RodoViev = () => {
  const rodoDate = [];
  RODO_AND_COOKIE.map((item) => rodoDate.push(item));

  const contentViev = (
    <div className={styles.wrapper}>
      <h1>Polityka RODO i Ciasteczek.</h1>

      <h3>{rodoDate[0].title}</h3>
      <p>{rodoDate[0].content}</p>
      <a href="mailto:mokrzyskaparafia@gmial.com">{rodoDate[0].email}</a>
      <p>{rodoDate[1].content}</p>

      <h3>{rodoDate[2].title}</h3>
      <p>{rodoDate[2].content}</p>
      <h3>{rodoDate[3].title}</h3>
      <p>{rodoDate[3].content}</p>
    </div>
  );
  return <>{contentViev}</>;
};
export default RodoViev;
