import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service5_23 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "n_palmowa_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 145; i++) {
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
      <h3>Niedziela Palmowa - 2023</h3>
      <p>
        Wielki Tydzień rozpoczęliśmy Niedzielą Palmową. O godzinie 10.30 bardzo
        licznie zgromadziliśmy się na placu kościelnym, gdzie rozpoczęła się
        Eucharystia i wyruszyliśmy na uroczystą procesję wokół kościoła. Rodzice
        wraz z dziećmi przygotowali na tą okoliczność pięknie ozdobione palmy
        wielkanocne. Po Mszy świętej odbył się konkurs na największą i
        najpiękniejszą palmę.Jury konkursowe wyłoniło zwycięzców 1,2,3 miejsca i
        rozdało nagrody.Pozostałe dzieci również otrzymały nagrody w postaci
        słodkości.
      </p>
      <p>
        Wszystkim gratulujemy! Bardzo dziękujemy za zaangażowanie wszystkim
        rodzicom, dziadkom i dzieciom
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

export default Service5_23;
