import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service14 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "damianOut";
  const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 8; i++) {
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
        W Niedzielę 22 sierpnia 2021 roku o godzinie 7.30, sprawowaliśmy Mszę
        świętą dziękczynną w intencji Pana Damiana Niedojadło za 12-letnią
        posługę w naszej Parafialnej Wspólnocie.
      </h3>
      <p>
        Bardzo dziękujemy za tę posługę pełną oddania, zaangażowania, troskę, za
        pracę włożoną w świątyni i na rzecz poszczególnych grup parafialnych.
        Pan Damian to osoba nieodłącznie związaną z naszą parafią towarzyszył
        nam wszystkim w najważniejszych momentach naszego życia – tych radosnych
        i smutnych. Pan Damian troszczył się o każdy szczegół, wiedział gdzie
        znajduje się najdrobniejsza rzecz, która w danej chwili była potrzebna.
        To człowiek, który z pasją i oddaniem podchodził do tego co robił.
        Zaangażowany ponad wszystko w swoją posługę. Niech dobry Bóg błogosławi
        Panu, obdarza hojnie wszelkimi łaskami za wszelkie dobro, obficie darzy
        zdrowiem i swym błogosławieństwem.{" "}
      </p>

      <h3>
        Życzymy Tobie Panie Damianie wielu łask Bożych w codziennym życiu i
        opieki Matki Bożej. Szczęść Boże!.
      </h3>
      <h3>
        Z wyrazami wdzięczności i pamięcią modlitewną – Ks. Proboszcz wraz z
        parafianami.
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

export default Service14;
