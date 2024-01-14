import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service_0424 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "jaselka_2024";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 65; i++) {
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
      <h3>Misterium Bożego Narodzenia - 13 stycznia 2024 Mokrzyska.</h3>

      <p>Dziś przeżyliśmy niezwykłą chwilę, gdyż jasełka czyli Misterium Bożego Narodzenia opracowane przez Ks.Kazimierza Jare przygotowane przez naszych parafian okazały się niezapomnianym wydarzeniem pełnym radości i wzruszeń. Wspólna praca i zaangażowanie każdego uczestnika sprawiły, że sceneria Bożego Narodzenia ożyła przed nami w wyjątkowy sposób. Dziękujemy wszystkim, którzy wzięli udział w tym niezwykłym świątecznym przedstawieniu! </p>

<p>
Dziękujemy Reżyserowi Damianowi za niezwykłe zaangażowanie i talent w przygotowaniu jasełek. Jego wkład sprawił, że nasze świąteczne przedstawienie było niezapomniane! </p>
<p>
Serdecznie dziękujemy licznie przybyłym parafianom za udział w naszym świątecznym przedstawieniu. Wasza obecność sprawiła, że atmosfera była wyjątkowa, pełna wspólnoty i radości. Dziękujemy za wsparcie i wspólną radość z Bożego Narodzenia!
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

export default Service_0424;
