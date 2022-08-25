import React, { useState, useEffect } from "react";
import request from "../../helpers/request";

import IntentionItem from "../../components/IntentionItem/IntentionItem";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./intentions.module.scss";

const Intentions = () => {
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

    const { data, status } = await request.get("/intentions");
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

  const Informations = !allInformations
    ? ""
    : allInformations.map((item) => (
        <IntentionItem className={styles.infoItem} key={item._id} item={item} />
      ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.inside}>
        <h1> Intencje Mszy Świętych</h1>
        {Informations}
      </div>
      {spinnerViev}
    </div>
  );
};

export default Intentions;
