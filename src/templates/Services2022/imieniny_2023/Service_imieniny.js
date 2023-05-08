import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service_imieniny = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "imienimy_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 20; i++) {
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
      <h3>Imieniny Księdza Proboszcza Stanisława - Mokrzyska 7.5.2023r.</h3>

      <p>
        W dniu 7.5.2023 przed Mszą świętą Liturgiczną Służba Ołtarza, Szafarze,
        Akcja Katolicka i Parafianie za pośrednictwem przedstawicieli Rady
        Parafialnej złożyli Księdzu Proboszczowi życzenia z okazji imienin. Po
        mszy Proboszcz obdarował dzieciaki słodyczami.
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

export default Service_imieniny;
