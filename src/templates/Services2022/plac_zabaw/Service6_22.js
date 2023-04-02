import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service6_22 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "plac_zabaw_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 33; i++) {
    const picObj = {
      id: i,
      path: `/images/${catalogName}/${i}.jpg`,
    };
    arrayOfPictures.push(picObj);
  }

  const imagesViev = arrayOfPictures.map((item) => (
    <div
      key={item.id}
      id={item.id}
      className={styles.imageItem}
      style={{
        backgroundImage: `url(${item.path})`,
      }}
      onClick={handleShowPicture}
    ></div>
  ));
  return (
    <div className={styles.wrapper}>
      <h3>
        Otwarcie i poświęcenie nowego urządzenia na placu zabaw w Przedszkolu.
      </h3>
      {/* <h2></h2> */}

      <p>
        21 marca 2023 roku w Publicznym Przedszkolu Parafialnym w Mokrzyskach,
        obyło się uroczyste powitanie wiosny przez dzieci z poszczególnych grup.
        Przedszkolaki wesołą zabawą pożegnały zimę. Słychać było radosne okrzyki
        „Witaj Wiosno!”. Natomiast dzień 22 marzec, był dniem dla wszystkich
        wyjątkowo radosnym, ponieważ Pani Dyrektor i ks. Proboszcz dokonali
        uroczystego otwarcia i poświęcenia nowego, wymarzonego urządzenia na
        placu zabaw. Spełniło się marzenie wielu dzieci, nauczycieli i rodziców.
        Przedszkolaki będą mogły miło i bezpiecznie spędzać czas na świeżym
        powietrzu. Przez zabawę, nauka stanie się przyjemniejsza. Kolorowy i
        bezpieczny sprzęt, pozwoli dzieciom urozmaicać czas, a także zaspokoić
        potrzeby ruchowe. Radość i uśmiech na twarzach przedszkolaków były
        największym podziękowaniem.
      </p>

      <p>Galeria (kliknij na zdjecie aby powiększyć)</p>

      <div className={styles.images}>{imagesViev}</div>
      <ItemImage
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
        pictureNo={pictureNo}
        setPictureNo={setPictureNo}
        catalogName={catalogName}
        slidesLength={arrayOfPictures.length}
        // pictureEnd={pictureEnd}
      />
    </div>
  );
};

export default Service6_22;
