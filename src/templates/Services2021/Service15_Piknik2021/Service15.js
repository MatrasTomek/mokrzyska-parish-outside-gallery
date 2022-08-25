import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service15 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "piknik_2021";
  const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 431; i++) {
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
      <h3>Moi Drodzy Parafianie!.</h3>
      <p>
        W imieniu własnym a przede wszystkim Członków Parafialnego Oddziału
        Akcji Katolickiej z mocno bijącym sercem, jak przystało na parafię z
        sercem, pragnę podziękować wszystkim wspólnotom i osobom dobrej woli,
        które włożyły mnóstwo pracy i serca żebyśmy mogli świętować w
        wyjątkowej, rodzinnej, przyjacielskiej atmosferze, niedzielne popołudnie
        5 września br.
      </p>
      <p>
        Dziękuję wszystkim, którzy przyczynili się do organizacji Pikniku
        Parafialnego, a przede wszystkim organizatorom tego wydarzenia{" "}
        <span>Członkom Parafialnego Oddziału Akcji Katolickiej</span> za pełne
        zaangażowanie, poświęcenie swojego czasu i włożony trud nad przebiegiem
        całej imprezy. Dziękuję także wszystkim osobom, za pomoc podczas
        przygotowania pikniku, za przywóz i montaż sceny, stanowisk, namiotów,
        grilli, sprzątanie, koszenie trawy i wykonane prace przy energii
        elektrycznej. Wypożyczenie ławek, stolików i wiele innych rzeczy, które
        trudno wymienić. W tym miejscu z serca dziękuję tym osobom. Dziękuję
        Firmie „Sowa Reklamy” za projekt i wydruk plakatów oraz Firmie „Event
        Corb” za piękny baner informujący o wydarzeniu. Dziękuję wszystkim
        Paniom i Panom z parafii i z poza, za pomoc w zakupach, organizacji
        pikniku, za strefę gastronomiczną, pomoc w pracach technicznych,
        dźwiękowych i logistycznych. Bez Was pomagających, nie udało by się,
        przygotować na czas wszystkiego. Za to wszystko składam staropolskie
        „Bóg zapłać”!.
      </p>
      <p>
        Dziękuję wszystkim sponsorom, dobrodziejom i ofiarodawcom, którzy
        przyczynili się do wsparcia tego wydarzenia. Dzięki Panu Tomaszowi
        Matrasowi oraz Portalowi Capucino ze cały piknik został odpowiednio
        uwieczniony na fotografiach. Dziękuję im pięknie, za tą pracę medialną.
        Dziękuję też służbom mundurowym: Ochotniczej Straży Pożarnej z Mokrzysk
        za obecność na wydarzeniu i pokaz. W szczególny sposób dziękuję
        wszystkim Paniom, które upiekły na to wydarzenie ciasta, ciasteczka,
        rogaliki, wszelkiego rodzaju smakołyki do kawy oraz przygotowały
        wspaniały bigos i pajdę chleba ze smalcem i ogórkiem.
      </p>
      <p>
        Na końcu pragnę w wyjątkowy sposób podziękować pomysłodawczyni tego
        wydarzenia. Bez jej inicjatywy, pomysłu, zaangażowania, nie byłoby tego
        wydarzenia i tak licznie przybyłych Parafian i Gości. A tą osobą, była
        Pani Małgorzata Bober – nasza parafianka. Kochani Parafianie, bez Was i
        Waszej pięknej pracy zespołowej nic nie udałoby się zdziałać. Dlatego
        wszystkim za wszystko dziękuję. Wielkie dzięki i niech Pan Wam
        Błogosławi a Matka Boża osłania Was, swoim płaszczem matczynej dobroci.
        Niech to wspólne wydarzenie, pozwoli nam Wszystkim, obecnie i w
        przyszłości, budować bezpośrednie, wzajemne relacje międzyludzkie.
        Oczywiście z serca dziękuję Ks. Prałatowi Marianowi Walowi za jego
        obecność i modlitwę.
      </p>
      <h3>Z darem wdzięczności i pamięcią modlitewną</h3>
      <h4>Ks. Stanisław Tokarski – Wasz Proboszcz</h4>
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

export default Service15;
