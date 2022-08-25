import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service20 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "11Listopad2021";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 93; i++) {
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
      <p>
        <span>Drodzy Bracia i Siostry w Chrystusie Panu.</span>
      </p>
      <p>
        <span>Kochani Parafianie</span>
      </p>
      <p>
        <span>
          Wielebny Księże Prałacie Marianie i Czcigodne Siostry ze Zgromadzenia
          Sióstr Franciszkanek Rodziny Maryi na czele z Matką Prowincjalną
          Małgorzatą Burek.
        </span>
      </p>
      <p>
        W 1997 roku Święty Jan Paweł II na Jasnej Górze dziękował Maryi za
        opiekę nad naszym narodem i prosił o dalsze Jej wstawiennictwo. W 103
        rocznicę odzyskania przez Polskę niepodległości przywołujemy jego
        modlitwę. Prosząc, aby Pan Bóg nieustannie błogosławił Polakom w kraju i
        na emigracji. Święto Niepodległości uświadamia nam wielką ofiarę i
        daninę krwi wylaną przez pokolenia Polaków dla odzyskania wolnej i
        suwerennej Ojczyzny. Dziś wspominamy ich, modlimy się za nich, aby dane
        im było cieszyć się ojczyzną niebieską. Ale również dziś w naszej
        wspólnocie parafialnej obchodzimy 25 rocznicę śmierci naszej ukochanej
        Siostry Katarzyny Przybytniak, która przez władze zakonne w 1960 roku
        skierowana została do domu zakonnego w Mokrzyskach. Świętej pamięci
        Siostra Katarzyna była człowiekiem wielkiej pokory, prostoty, o bardzo
        gorącym sercu otwartym na cierpienia i potrzeby drugiego człowieka.
        Dewizą jej życia była modlitwa i praca. Siostra Katarzyna posługując w
        naszej parafii, w tym bardzo trudnym okresie komunistycznym, doznała
        wiele szykan, wezwań na milicję, wezwań do władz powiatowych czy też
        wojewódzkich. Jednakże te szykany władz powiatowych, milicji nie złamały
        odwagi i ducha męstwa Siostry Katarzyny, pozostały tylko trzęsące się
        ręce, jako pamiątka tych wszystkich przeżyć i wydarzeń. Dlatego jeszcze
        bardziej miejscowy lud pokochał swoją Czcigodną Siostrę Katarzynę. Była
        tak ujmująca i zawsze uśmiechnięta, trafiająca do każdego serca, że
        została nazwana zdrobniale „siostrą Katarzynką”. I tak już pozostanie,
        dopóki będzie trwać w naszej pamięci i modlitwie. Dziś pragniemy w tej
        Eucharystii dziękować za wszystko, za Jej dobroć, za Jej gorące matczyne
        serce, za te lata spędzone wśród nas, za Jej posługę, modlitwę i
        cierpienie. Niech dobry Bóg tam w niebie wynagrodzi Siostrę Katarzynę -
        radością życia wiecznego. Uczmy się od patrona dnia dzisiejszego
        świętego Marcina, od wszystkich którzy walczyli w obronie naszej
        Ojczyzny oraz od Siostry „Katarzynki” gorliwości w służbie Bożej i w
        służbie ziemskiej Ojczyźnie.
      </p>

      <p>
        W dniu 11 listopada 2021 roku, o godzinie 9.00 modliliśmy się w intencji
        naszej Ojczyzny oraz za śp. Siostrę Katarzynę Przybytniak z okazji 25
        rocznicy Jej śmierci. Po Mszy świętej prześlijmy w procesji na cmentarz
        parafialny do grobu śp. Katarzyny Przybytniak modląc się Koronką do
        Miłosierdzia Bożego. Dziękujemy wszystkim za wspólną modlitwę i pamięć o
        naszej Ukochanej Siostrze Katarzynie. Wyrazy wdzięczności składamy
        Parafialnemu Oddziałowi Akcji Katolickiej za opiekę nad grobem Siostry
        Katarzyny, modlitwę i zamawiane Msze święte w Jej intencji.
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

export default Service20;
