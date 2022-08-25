import React, { useState } from "react";

import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service4 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
  };

  const catalogName = "13maj";
  const pictureEnd = "small";
  const arrayOfPictures = [];

  for (let i = 1; i < 19; i++) {
    const picObj = {
      id: i,
      path: `/images/${catalogName}/${i}small.jpg`,
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
        W czwartek 13 maja o godzinie 19.00 odbyło się pierwsze nabożeństwo
        Fatimskie wraz z Mszą świętą, które poprowadził Ojciec Piotr
        Graduszewski z zakonu Trynitarzy. Dziękuję za przygotowanie pięknej
        dekoracji, niesienie figury Matki Bożej Fatimskiej w czasie procesji i
        prowadzenie modlitwy różańcowej Paniom z Koła Gospodyń Wiejskich.
      </h3>

      <h4>
        Wszystkich Czcicielom Pani Fatimskiej Bóg zapłać za wspólną modlitwę.
      </h4>
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

export default Service4;
