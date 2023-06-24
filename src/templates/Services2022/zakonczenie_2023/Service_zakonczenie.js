import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service_zakonczenie = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "zakonczenie_roku_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 31; i++) {
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
      Drodzy Parafianie
      </h3>
      <p>Chcielibyśmy podzielić się z Wami wspaniałymi wydarzeniami, które miały miejsce w naszej parafii .
W czawrtek 22 czerwca 2023r. odbyła się uroczysta Msza święta na zakończenie roku szkolno-przedszkolnego, podczas której wyraziliśmy naszą wdzięczność dwóm niezwykłym osobom.
</p>
<p>Przede wszystkim osobą , którą chcielibyśmy wyróżnić, jest Pani Maria Turlej, nasza ukochana nauczycielka z Przedszkola Parafialnego. Po 40 latach oddanej pracy, Pani Maria przechodzi zasłużenie na emeryturę. Jej oddanie, troska i pasja w pracy z najmłodszymi były niewątpliwie nieocenione. Przedszkolaki, które miały zaszczyt uczyć się od Pani Marii, z pewnością będą pamiętać te cenne chwile przez całe życie. Dziękujemy Pani Marii za ogromny wkład w edukację naszych dzieci i życzymy jej wielu radosnych i spokojnych chwil.
</p>
<p>Drugą osobą ,której dziękowaliśmy serdecznie jest Ksiądz Mateusz Kawa wikariusz parafii Szczepanów,który z oddaniem prowadził katechizację w naszej Szkole. Jego zaangażowanie, wiedza i miłość do dzieci sprawiły, że katecheza była nie tylko nauką, ale również czasem radości i wzrostu duchowego dla naszych uczniów. Ksiądz Mateusz zawsze był blisko nas, gotowy do udzielenia wsparcia i słowa pocieszenia. Dziękujemy mu za wszystko, czego nas nauczył i za piękne chwile, które razem przeżyliśmy.
</p>
<p>Czwartkowa Msza święta była pełna wzruszeń i wdzięczności. Wspólnie podziękowaliśmy Księdzu Mateuszowi i Pani Marii za ich ogromne zaangażowanie i oddanie. Niech Bóg błogosławi im  w dalszej drodze życia i obdarza ich obfitością łask.
</p>

<h4>Bóg Zapłać !!</h4>

<h4>Ks .Proboszcz</h4>
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

export default Service_zakonczenie;
