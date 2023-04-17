import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service_caritas = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "medale_caritas_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 26; i++) {
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
      <h3>Diecezjalne Święto Caritas</h3>

      <p>
        W Tylmanowej 15 kwietnia 2023 roku, odbyło się diecezjalne święto
        Caritas. Uroczystą Mszę św. odprawił i homilię wygłosił biskup tarnowski
        Andrzej Jeż.
      </p>
      <p>Podczas uroczystości 36 osób otrzymało medale Misericors.</p>
      <p>
        <span>
          W tym gronie znalazły się również nasze Drogie Parafianki: Wiesława
          Smuk, Krystyna Biedak i Grażyna Milewska.
        </span>
      </p>
      <p>
        W uroczystościach brali udział duszpasterze, pracownicy i wolontariusze
        Caritas z całej diecezji tarnowskiej. Biskup Andrzej Jeż podczas homilii
        dziękował wolontariuszom za ich zaangażowanie i dobro niesione
        potrzebującym. 36 osób zostało odznaczonych medalem Misericors, za
        wyjątkowe zaangażowanie w działalność charytatywną.
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

export default Service_caritas;
