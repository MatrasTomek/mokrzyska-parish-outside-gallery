import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service_0324 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "koncert_koled_2024";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 100; i++) {
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
      <h3>Koncert Kolęd i Pastorałek - 7 stycznia 2024 Mokrzyska.</h3>

      <p>Koncert kolęd i pastorałek w wykonaniu Dziewczęcego Chóru Katedralnego Puellae Orantes był niezwykłym i niezapomnianym wydarzeniem. Chór ten składał się z utalentowanych i pełnych pasji dziewcząt, które za sprawą swojego wspaniałego śpiewu potrafiły przenieść słuchaczy w magiczny i świąteczny nastrój.</p>
      <p>Ks. Władysław Pachota, pełen energii i oddania, sprawiał, że chór był zgraną i zmotywowaną grupą, która potrafiła oddać w pełni charakter kolęd i pastorałek. Jego charyzma i umiejętność kierowania zespołem z pewnością odegrały kluczową rolę w sukcesie koncertu.</p>
      <p>Pani Weronika Gardziel, odpowiedzialna za akompaniament, również odznaczała się nietuzinkowym talentem muzycznym. Jej gra była doskonale dostosowana do występujących utworów, pomagając stworzyć głębię i harmonię każdej piosenki.</p>
<p>Pani Aleksandra Topor, Kierownik Artystyczna Puellae Orantes sprawiła, że cały koncert był zorganizowany w sposób perfekcyjny. Jej dbałość o szczegóły i profesjonalizm sprawiły, że koncert był niezapomnianym przeżyciem dla wszystkich obecnych.</p>
<p>Występ był nie tylko koncertem kolęd i pastorałek, ale przede wszystkim niesamowitym doświadczeniem duchowym. Dziewczęta przepełnione pasją, talentem i miłością do muzyki potrafiły przekazać emocje i uczucia obecne w świątecznym czasie. Ich występ wprowadził wszystkich słuchaczy w atmosferę spokoju, radości i nadziei, która towarzyszy narodzinom Jezusa Chrystusa.</p>
<p>Serdecznie zapraszamy do galerii!</p>
<p><span>Zdjęcia: Radosław Bełżek FOTO</span></p>
<p>Dziękujemy Panu Radosławowi Bełżek za profesjonalną fotorelację z Koncertu.</p>
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

export default Service_0324;
