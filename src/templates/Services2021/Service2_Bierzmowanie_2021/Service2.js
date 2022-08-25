import React, { useState } from "react";

import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
  };

  const catalogName = "confirmation";
  const pictureEnd = "_small";
  const arrayOfPictures = [];

  for (let i = 1; i < 25; i++) {
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
        07 maja 2021 roku, 17-osobowa grupa młodzieży z naszej parafii przyjęła
        Sakrament Dojrzałości Chrześcijańskiej w Bazylice św. Biskupa Stanisława
        w Szczepanowie. Sakramentu Bierzmowania udzielił Ks. Biskup Leszek
        Leszkiewicz. W obecności zgromadzonych świadków bierzmowania, a także
        swoich najbliższych kandydaci do bierzmowania wyrazili swoją chęć
        przyjęcia tego Sakramentu słowami – „Pragniemy, aby Duch Święty, którego
        otrzymamy umocnił nas do mężnego wyznawania wiary i do postępowania
        według jej zasad”.
      </h3>
      <h3>
        Gratuluję Młodzieży tego bardzo ważnego wydarzenia w ich życiu i życzę
        aby dary Ducha Świętego, które otrzymali pomagały im na co dzień w
        dawaniu świadectwa swojej wiary!
      </h3>
      <h2>
        Bierzmowanie jest to sakrament, w którym Duch Święty umacnia
        chrześcijanina, aby wiarę swą mężnie wyznawał, bronił jej i według niej
        żył.
      </h2>
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

export default Service2;
