import React, { useState } from "react";

import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service3 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
  };

  const catalogName = "20_years";
  const pictureEnd = "_small";
  const arrayOfPictures = [];

  for (let i = 1; i < 30; i++) {
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
        Imieniny to szczególny dzień w roku, a dzięki Waszym pięknym życzeniom
        stał się jeszcze wspanialszy. Dziękuję Wszystkim Parafianom, Grupom,
        Dyrekcji Publicznego Przedszkola Parafialnego Młodzieży, Dzieciom,
        Zespołowi „Eleos” rodzinie i wszystkim zaangażowanym w przygotowanie
        świętowania dnia Mojego Patrona i Jubileuszu Kapłańskiego z całego serca
        za pamięć, modlitwę i wspólną przeżytą Eucharystię!.
      </h3>

      <h4>Z pamięcią i darem modlitwy Ks. Proboszcz - Stanisław</h4>
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

export default Service3;
