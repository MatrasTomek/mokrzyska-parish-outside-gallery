import React, { useState } from "react";
import ItemImage from "../../../components/ImageItemNoCopy/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service1_23 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "rekolekcje_wlp_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 23; i++) {
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
      <h3>Rekolekcje Wielkopostne Przedszkolaków - 2023</h3>
      <p>
        W dniu 31 marca br., odbyły się Rekolekcje Wielkopostne dla naszych
        Maluchów z Przedszkola, które prowadził ks. Sylwester Brzeżny.{" "}
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

export default Service1_23;
