import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service_0724 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "jubileusz_2024";
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
      <h3>JUBILEUSZ 25 – LECIA PARAFIALNEGO ODDZIAŁU AKCJI KATOLICKIEJ W PARAFII NAJŚWIĘTSZEGO SERCA PANA JEZUSA W MOKRZYSKACH.</h3>
      <p>15 września 2025 roku minęło 25 lat od założenia Parafialnego Oddziału Akcji Katolickiej (POAK) w naszej parafii. Z tej okazji pragniemy wyrazić naszą wdzięczność wszystkim, którzy na przestrzeni tych lat angażowali się w działalność POAK, wspierali jego inicjatywy oraz przyczyniali się do budowania silnej wspólnoty katolickiej.</p>
      <p>Od chwili powołania POAK oraz pierwszego Prezesa, który dekretem <span>ks. Bpa Wiktor Skworc</span>, został powołany Marek Adamczyk (15.09.1999r.) minęło 25 lat. Od chwili powstania, nasz Oddział aktywnie uczestniczył w życiu parafii, organizując liczne wydarzenia religijne, kulturalne i charytatywne. Przez te lata udało nam się zrealizować wiele wartościowych projektów, które miały na celu pogłębienie wiary, pomoc potrzebującym oraz integrację naszej wspólnoty parafialnej.</p>
      <p>W szczególny sposób pragniemy podziękować naszym duszpasterzom a szczególności, Ks. Prałatowi Marianowi Walowi (założycielowi – Parafialnego Oddziału Akcji Katolickiej), ks. Janowi Panek, Ks. Stanisławowi Tokarskiemu, Członkom Akcji Katolickiej oraz wszystkim Parafianom, którzy wspierali nasze inicjatywy. Wasze zaangażowanie, modlitwa i wsparcie były i są nieocenione.</p>
      <p>Z okazji jubileuszu 25-lecia, 15 czerwca 2024 roku, odbyła się uroczysta Msza Świętą dziękczynna za 25 lat naszego stowarzyszenia. To był czas, aby na kolanach przed Najświętszym Sakramentem dziękować Bogu za nasze stowarzyszenie. Na ten wyjątkowy dzień przybył <span>ks. dr hab. Jan Bartoszek</span>, diecezjalny Asystent Akcji Katolickiej w Diecezji Tarnowskiej oraz <span>ks. mgr Stanisław Tokarski</span> – Dekanalny Asystent Akcji Katolickiej w Dekanacie Szczepanowskim.  Przybyli obecni członkowie i sympatycy na czele z p. Ewą Wodą, Prezesem POAK, jak również byli Prezesi POAK: <span>P. Marek Adamczyk, (1999-2006), P. Stanisława Pajor (2006-2008), P. Krzysztof Niemiec (2009-2019), P. Ewa Adamczyk (2019-2023),</span> członkowie i sympatycy Akcji Katolickiej, którzy kiedyś byli w naszym stowarzyszeniu.</p>
      <p>W dniu 20 września 2024 roku w ramach świętowania Jubileuszu 25 – lecia, będziemy uczestniczyli we wspólnej wycieczce do Sandomierza. Wspólna agapa, będzie doskonałą okazją do wspólnego świętowania, wspomnień i planowania dalszych działań. Niech ten Jubileusz będzie dla nas Wszystkich czasem radości, wdzięczności i nowej inspiracji do dalszej służby na rzecz naszej parafii  i społeczności lokalnej.</p>

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

export default Service_0724;
