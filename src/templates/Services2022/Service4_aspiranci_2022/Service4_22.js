import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service4_22 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "aspiranci_2022";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 129; i++) {
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
      <h3>Obrzęd przyjęcia aspirantów do grona ministrantów.</h3>
      <p>Mokrzyska 03.04.2022r.</p>
      <p>
        Nowym ministrantom i ich rodzicom, gratulujemy i życzymy wytrwałości w
        pełnieniu posługi przy ołtarzu.
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

export default Service4_22;
