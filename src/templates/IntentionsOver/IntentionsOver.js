import React, { useState, useEffect } from "react";
import request from "../../helpers/request";

import IntentionItem from "../../components/IntentionItem/IntentionItem";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./intentionsOver.module.scss";

const IntentionsOver = () => {
  const [allInformations, setAllInformations] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const spinnerViev = !spinner ? "" : <Spinner />;

  const getAllInformation = async () => {
    setSpinner(true);
    // fetch("http://vps-02f6bdbc.vps.ovh.net:8080/intentions")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAllInformations(data.data.reverse());
    //     setSpinner(false);
    //   })
    //   .catch((err) => console.log("Błąd:  ", err));

    const { data, status } = await request.get("/intentionsOver");
    if (status === 200) {
      setAllInformations(data.data.reverse());
      setSpinner(false);
    } else {
      console.log(status, data.message);
    }
  };

  useEffect(() => {
    getAllInformation();
  }, []);

  const informations = () => {
    if (!allInformations) {
      return;
    } else {
      return allInformations
        .sort((a, b) => a.month - b.month)
        .map((item) => (
          <IntentionItem
            className={styles.infoItem}
            key={item._id}
            item={item}
          />
        ));
    }
  };
  console.log(informations());
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.inside}>
        <h1> Intencje Mszy Świętych odprawianych poza Parafią</h1>
        {informations()}
      </div>
      {spinnerViev}
    </div>
  );
};

export default IntentionsOver;
