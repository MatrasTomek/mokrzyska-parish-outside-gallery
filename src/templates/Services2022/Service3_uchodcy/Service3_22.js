import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service3_22 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "uchodzcy";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 5; i++) {
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
      {/* <h3></h3> */}

      <p>
        Do Naszej Wspólnoty parafialnej 20 marca przybyli uchodźcy wojenni z
        Zaporoża. Obecnie zamieszkali na plebanii w dawnej części mieszkalnej po
        Siostrach Zakonnych. Obejmijmy ich pamięcią modlitewną.
      </p>
      <p>
        Jeżeli ktoś z Was Siostry i Bracia chce wesprzeć materialnie Naszych
        gości proszę o wpłaty na konto Parafii: bank: PKO BP O/Brzesko , Nr
        konta: 34 1020 4984 0000 4702 0148 8246 ,{" "}
        <span>tytuł przelewu: Ukraina.</span>
      </p>

      {/* <h4></h4> */}

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

export default Service3_22;
