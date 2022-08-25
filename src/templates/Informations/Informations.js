import React, { useState, useEffect } from "react";
import request from "../../helpers/request";

import InformationItem from "../../components/InformationItem/InformationItem";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./informations.module.scss";

const Informations = () => {
  const [allInformations, setAllInformations] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const spinnerViev = !spinner ? "" : <Spinner />;

  const getAllInformation = async () => {
    setSpinner(true);
    // fetch("http://vps-02f6bdbc.vps.ovh.net:8080/informations")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAllInformations(data.data.reverse());
    //     setSpinner(false);
    //   })
    //   .catch((err) => console.log("Błąd:  ", err));
    const { data, status } = await request.get("/informations");
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
        <InformationItem
          className={styles.infoItem}
          key={item._id}
          item={item}
        />
      ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.inside}>
        <h1>Ogłoszenia Parafialne</h1>
        {Informations}
      </div>
      {spinnerViev}
    </div>
  );
};

export default Informations;
