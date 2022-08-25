import React, { useState } from "react";

import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service7 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
  };

  const catalogName = "40_60_years";
  const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 136; i++) {
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
        Obchody Jubileuszu 40 - lecia istnienia naszej parafii oraz 60 – lecia
        święceń kapłańskich naszego pierwszego Proboszcza ks. Prałata Mariana
        Wala. 10.06.2021r.
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

export default Service7;
