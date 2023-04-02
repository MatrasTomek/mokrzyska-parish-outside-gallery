import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service5_2023 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
  };

  const catalogName = "rocznicz_p.Koczwary_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 46; i++) {
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
      <h3>134 rocznica urodzin płk. Józefa Koczwary</h3>

      <p>
        W dniu 12 marca 2023 roku w naszej wspólnocie parafialnej gościliśmy
        Szanownych Żołnierzy przedstawicieli 1 Batalionowi Czołgów imienia płk.
        Józefa Koczwary z Żurawicy, na czele z dowódcą podpułkownikiem Rafałem
        Kluzą i ich kapelanem księdzem Włodzimierzem Skoczeniem. Żołnierze
        modlili się w intencji swego patrona, a naszego rodaka z okazji 134
        rocznicy urodzin. Mszy świętej przewodniczył kapelan Włodzimierz Skoczeń
        a kazanie wygłosił ks. Proboszcz - Stanisław Tokarski. Na koniec Mszy
        świętej, Ks. Proboszcz podziękował żołnierzom i rodzinie zmarłego Józefa
        Koczwary za przybycie, wspólną modlitwę i pamięć o swoim patronie.{" "}
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

export default Service5_2023;
