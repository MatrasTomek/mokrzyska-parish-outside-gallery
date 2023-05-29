import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service_majowka = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "majowka_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 7; i++) {
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
        Nabożeństwo Majowe 27 maja 2023 roku przy kapliczce Matki Bożej na
        ulicy Stanisławskiej.
      </h3>

      <p>,, Po górach, dolinach rozlega się dzwon...'' </p>
      <p>
        Tą oraz inne pieśni śpiewają uczestnicy nabożeństw majowych, gromadzący
        się przy pięknej figurze Matki Bożej na ulicy Stanisławskiej w
        Mokrzyskach. Warto potrzymywać ten piękny zwyczaj uwielbienia Maryi przy
        kapliczkach rozsianych po naszej parafii. Bóg zapłać za wspólną
        modlitwę, świadectwo wiary i tradycji oraz wspaniałą gościnę. Dziękuję
        za dbałość o to piękne miejsce i za Waszą frekwencję.
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

export default Service_majowka;
