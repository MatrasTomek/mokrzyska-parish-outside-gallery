import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service17 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "teatr_sw_stanislaw";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 67; i++) {
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
        W dniu 16 października 2021 roku w Gminnym Ośrodku Sportu i Rekreacji w
        Mokrzyskach przy pełnej sali widzów, na deskach sceny, Teatr Parafialny
        „Cordis” z Mokrzysk wystawił sztukę teatralną, księdza Pawła Wieczorka z
        1936 roku pt. „Święte Pachole”.
      </h3>
      <p>
        To pierwsza część trylogii traktująca o św. Stanisławie ze Szczepanowa.
      </p>
      <p>Reżyserem przedstawienia był Damian Niedojadło.</p>
      <p>
        Data i godzina wystawienia sztuki - 16 październik - nie była
        przypadkowa, ponieważ 16 października 1978 roku około godziny 17:15
        kolegium kardynałów wybrało 264 papieża. Został nim pierwszy w historii
        Słowianin, krakowski kardynał Karol Wojtyła, który przyjął imię{" "}
        <span>Jan Paweł II</span>
      </p>
      <p>
        Po premierze licznie zgromadzeni widzowie z Mokrzysk i okolicznych
        miejscowości, gromkimi oklaskami dziękowali aktorom – amatorom za
        umożliwienie im poznania tak cennego przedstawienia.
      </p>

      <p>
        Dziękuję aktorom za ogromy wysiłek, zaangażowanie i poświęcony czas w
        przygotowaniu przedstawienia
      </p>
      <p>Gratuluję sukcesu i zachęcam do dalszej działalności.</p>
      <h4>Ks. Stanisław Tokarski - Wasz Proboszcz</h4>

      <p>Galeria (kliknij na zdjecie aby powiększyć)</p>
      <p>
        Część zdjęć pochodzi z archiwum Tarnowskiego{" "}
        <a
          href="https://tarnow.gosc.pl/gal/spis/7165871.Rzecz-o-sw-Stanislawie-w-Mokrzyskach"
          target="blank"
        >
          Gościa Niedzielnego.
        </a>
      </p>
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

export default Service17;
