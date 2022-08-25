import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service2_22 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "paczka_ua_2022";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 14; i++) {
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
      <h3>Drodzy Parafianie,</h3>

      <p>
        serdecznie dziękujemy za zaangażowanie oraz wielkie serce włożone w
        zbiórkę darów dla poszkodowanych w wyniku wojny na Ukrainie.
        Pokazaliście, że w trudnej sytuacji potraficie podzielić się tym co
        posiadacie, by wspomóc potrzebujących. To piękny i szlachetny gest.
        Dzięki Waszej aktywnej postawie zebraliśmy 7 paczek produktów. Dziękuję
        Paniom z parafialnego Oddziału „Caritas” (Pani: Grażynie Milewskiej,
        Wiesławie Smuk i Krystynie Biedak) za przygotowanie paczek, a naszym
        Panom Szafarzom (Panu Kazimierzowi Chmielarzowi, Zbigniewowi Trąbie i
        Stanisławowi Konstantemu) za dostarczenie paczek do wyznaczonego punktu
        odbioru.{" "}
      </p>

      <h4>Z darem modlitwy - Wasz Proboszcz – Ks. Stanisław Tokarski</h4>

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

export default Service2_22;
