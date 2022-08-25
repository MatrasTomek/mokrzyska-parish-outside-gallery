import React, { useState } from "react";

import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service1 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
  };

  const catalogName = "230_years";
  const pictureEnd = "_small";
  const arrayOfPictures = [];

  for (let i = 1; i < 13; i++) {
    const picObj = {
      id: i,
      path: `/images/${catalogName}/${i}_small.jpg`,
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
        03.05.2021. Obchody 230 rocznicy uchwalenia Konstytucji 3 maja oraz
        obchody Strażaków ku czci św. Floriana
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

export default Service1;
