import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service16 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "sluzbaMaryjna";
  const pictureEnd = "_small";
  const arrayOfPictures = [];

  for (let i = 1; i < 83; i++) {
    const picObj = {
      id: i,
      path: `/images/${catalogName}/${i}${pictureEnd}.jpg`,
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
      <h3>OBRZĘD PRZYJĘCIA DZIEWCZĄT DO DZIEWCZĘCEJ SŁUŻBY MARYJNEJ</h3>
      <p>
        W niedzielę 10 października 2021 roku w naszej parafii podczas Mszy
        Świętej o godz. 10.30 do grona Dziewczęcej Służby Maryjnej zostało
        włączonych 18 dziewczynek. Uroczystego obrzędu wraz z poświęceniem
        dokonał Ks. Proboszcz - Stanisław Tokarski.{" "}
      </p>
      <p>
        Gratulujemy Dziewczynom kolejnego kroku w wierze. Życzymy wiele Radości
        z bycia Dzieckiem Maryi. Cieszymy się w Waszej obecności na Eucharystii.
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

export default Service16;
