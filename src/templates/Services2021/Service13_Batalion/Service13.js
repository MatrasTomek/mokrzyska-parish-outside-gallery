import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service13 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "batalion";
  const pictureEnd = "_big";
  const arrayOfPictures = [];

  for (let i = 1; i < 44; i++) {
    const picObj = {
      id: i,
      path: `/images/${catalogName}/${i}_big.jpg`,
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
        10 rocznica nadania 1 Batalionowi Czołgów imienia płk. Józefa Koczwary
        08-08-2021 Mokrzyska
      </h3>
      <p>Galeria (kliknij na zdjecie aby powiększyć)</p>
      <div className={styles.images}>{imagesViev}</div>
      <ItemImage
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
        pictureNo={pictureNo}
        setPictureNo={setPictureNo}
        catalogName={catalogName}
        slidesLength={arrayOfPictures.length}
        pictureEnd={pictureEnd}
      />
    </div>
  );
};

export default Service13;
