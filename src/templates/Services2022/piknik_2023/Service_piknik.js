import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service_piknik = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pictureNo, setPictureNo] = useState(false);

  const handleShowPicture = (e) => {
    setModalOpen(true);
    setPictureNo(Number(e.target.id));
    console.log(e.target.id);
  };

  const catalogName = "piknik_2023";
  // const pictureEnd = "";
  const arrayOfPictures = [];

  for (let i = 1; i < 337; i++) {
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
      <h3>  Piknik Parafialny - Parafia z sercem - Mokrzyska 20.08.2023r.</h3>

      <p><span>Drodzy Parafianie, Goście, Uczestnicy Pikniku</span></p>
<p>W minioną niedzielę (20 sierpnia 2023 roku) odbył się III Piknik Parafialny pod hasłem „Parafia z Sercem”. Bardzo się cieszymy, że przybyliście tak licznie, żeby spędzić cudownie czas w gronie parafialnym. Z tej okazji chcielibyśmy bardzo podziękować wszystkim wspólnotom parafialnym i osobom dobrej woli, które włożyły mnóstwo pracy i serca, żebyśmy mogli świętować ten dzień w wyjątkowej, rodzinnej atmosferze. Dziękujemy wszystkim, którzy przyczynili się do organizacji tego wydarzenia, a przede wszystkim organizatorom tego wydarzenia. Za pełne zaangażowanie, poświęcenie swojego czasu i czuwanie nad przebiegiem całej imprezy do samego końca.</p>
<p>Dziękujemy wszystkim, za całą pomoc podczas trwania pikniku przy montażu stanowisk, sceny, oświetlenia, przy zakupach, sprzątaniu, w organizacji i stworzeniu plakatów wydarzenia, pracach technicznych, dźwiękowych, medialnych i logistycznych. Bez Was pomagających, nie udało by się przygotować na czas wszystkich stanowisk, a po zakończeniu imprezy wszystkiego posprzątać. Wielki Bóg zapłać!</p>
<p>Dziękujemy także wszystkim wykonawcom, aktorom, którzy tak chętnie po raz pierwszy wystąpili na „parafialnej scenie piknikowej”, przedstawiając bajkę J. Tuwima pt. „RZEPKA”, jak również naszym dzielnym, utalentowanym dzieciom z naszego Publicznego Przedszkola Parafialnego, którzy wykonali utwory o bł. Karolinie Kózka pod bacznym okiem Pana Andrzeja Gicali. Wszystkim parafianom – „aktorom”, dzieciom, ich rodzicom i nauczycielom, którzy dostarczyli nam wszystkim niezwykłych przeżyć artystycznych pięknie dziękujemy!</p>
<p>Dziękujemy sponsorom, darczyńcom, którzy wsparli rzeczowo i finansowo to duże przedsięwzięcie oraz wszystkim tym, którzy przyczynili się do organizacji tego wydarzenia, a w szczególności do występu gwiazdy wydarzenia – Pawła Gołeckiego.</p>
<p>Bardzo dziękujemy  naszym kochanym parafiankom za przygotowanie i dostarczenie pysznego ciasta i ciasteczek. Dziękuję Drogim Paniom i Panom którzy działali na zapleczu, więc nie było ich widać, ale za to owocem ich działań była  bezcenna praca przy organizacji stanowisk z ciastami, napojami, gastronomią i grillem. Podziękowania kieruję w stronę naszych parafian i nie tylko: za wypożyczenie ławek, stolików, krzeseł, grilli, chłodni, lodówek, koszy, namiotów i parasoli. Dziękuję Motocyklistom ze Stowarzyszenia HDK Moto Jadowniki, którzy zafascynowali nas swoją pasją oraz sposobem na czerpanie radości z życia. Dzięki mediom, cały piknik został uwieczniony na fotografiach i parafia ma niesamowitą fotorelację. Dziękujemy Wam pięknie, za tą pracę medialną. Dziękujemy też służbom mundurowym: Ochotniczej Straży Pożarnej z Mokrzysk oraz Policji za obecność na wydarzeniu i czujne oko względem bezpieczeństwa. Dziękujemy wszystkim gościom, parafianom, dzieciom i młodzieży za obecność, udział i wspólną zabawę podczas Pikniku. To był niezwykły dzień pełen radości, wspólnoty i wspaniałej zabawy.
Kochani, bez Was i Waszej pięknej pracy zespołowej nic nie udałoby się tak wspaniale. Wielkie dzięki i niech Pan Wam Błogosławi a Matka Boża osłania Was swoim płaszczem matczynej dobroci.</p>
<p>Tegoroczni Sponsorzy Pikniku „Parafia z Sercem” to:</p>
<ul>
  <li>Urząd Miasta i Gminy Brzesko </li>
  <li>Przedsiębiorstwo Usługowo-Handlowe – Mateusz Wajda - Czarnorzeki </li>
  <li>Firma Usługowo -Transportowa – Dariusz Daniel -  Iwierzyce</li>
  <li>Firma Usługowo-Transportowa – Marek Smoła – Gołęczyna</li>
  <li>Firma Zbigniew Szczepan Stachów – Stary Dzików</li>
  <li>Firma Karol Koperta - Brzyska Wola</li>
  <li>Firma Wiar Spółka zoo – Sierakośce</li>
  <li>Zakład Przetwórstwa Mięsnego – Henryk Kołdras – Proszówki </li>
  <li>Firma Handlowo - Usługowa, "Granitex - Usługi kamieniarskie. Agata i Antoni Wis - Mokrzyska </li>
  <li>Ewa i Sebastian Koryga – Mokrzyska</li>
  <li>Ks. Stanisław Tokarski – Proboszcz parafii</li>
  <li>Firma Hemist</li>
  <li>Robert i Agnieszka Pławeccy - Mokrzyska</li>
  <li>Marek i Jadwiga Adamczyk - Mokrzyska</li>
  <li>Grażyna i Edward Milewscy – Mokrzyska</li>
  <li>Andrzej i Wiesława Smuk - Mokrzyska</li>
  <li>Firma Szaman Meble – Daniel i Monika Klimek – Mokrzyska</li>
  <li>Jakub i Paulina Biedak - Mokrzyska</li>
  <li>Maria i Waldemar Wolsza – Mokrzyska</li>
  <li>Jerzy i Dorota Woda – Mokrzyska</li>
  <li>Piekarnia Wiejska „Canterano” - Borek</li>
  <li>Jadwiga Brzózka – Mokrzyska</li>
  <li>Bogdan i Maria Zachara Mokrzyska</li>
  <li>Usługi Budowlane - Wiesław i Hanna Latocha - Mokrzyska</li>
  <li>Firma GranitKam - Jakub Tokarski – Drużków Pusty</li>
  <li>Stanisław i Halina Sobol – Mokrzyska</li>
  <li>Firma ''Rem-But'' Łukasz i Barbara Sorota – Mokrzyska</li>
  <li>Firma Remontowo-Budowlana - Andrzej Piech – Mokrzyska</li>
  <li>Sklep Spożywczy "GROSIK" Wiesław i Małgorzata Bober - Brzesko</li>
  <li>Janina Augustyn – Mokrzyska</li>
  <li>Michał i Katarzyna Dziedzic – Mokrzyska</li>
  <li>Marian i Zofia Hołyst – Mokrzyska</li>
  <li>Dorota i Bolesław Kazek – Mokrzyska</li>
  <li>Zakład Fryzjerski – Justyna Janiszewska - Brzesko</li>
  <li>Firma Geers – Dobry Słuch - Brzesko - ulica Głowackiego</li>
  <li>Bufix – Biuro Ubezpieczeń – Brzesko - Agnieszka Turlej</li>
  <li>Krakowski Bank Spółdzielczy – Oddział Brzesko</li>
  <li>Sklep PSB „Mrówka” - Brzesko</li>
  <li>Sylwia ODROŃ – Zakład Kosmetyczny - Brzesko</li>
  <li>Firma  RAP-TOK - Miłosz Bober - Mokrzyska</li>
  <li>Agnieszka Górniak - Warszawa</li>
  <li>''ANAPOL'' Przedsiębiorstwo Produkcyjno – Handlowo – Usługowe - Piotr Pacura - Brzesko</li>
  <li>Wiesław i Małgorzata Bober - Mokrzyska</li>
  <li>''Foto Lambert''. Zakład Fotograficzny - Brzesko </li>
  <li>Firma Handlowo Usługowa BKI - Dariusz Robak - Brzesko  </li>
  <li>Firma Raypath – środki ekologiczne, czyściwa. Ewelina Knapik – Libiąż </li>
  <li>Adamczyk Krzysztof - Sufczyn</li>
  <li>Damian i Wiola Jarosz – Mokrzyska</li>
  <li>Pająk Iwona – Mokrzyska</li>
  <li>Piotr i Anna Łagosz – Mokrzyska</li>
  <li>Marian i Zofia Hołyst – Mokrzyska</li>
  <li>Beata i Damian Kazek - Mokrzyska</li>
  <li>Artur Szydłowski - Mokrzyska</li>
  <li>Koło Gospodyń Wiejskich - Mokrzyska</li>
  <li>Brzeskie Centrum Hipiczne "GNIADY" – Joanna i Tomasz Tabiś – Mokrzyska</li>
  <li>Biuro „Reklamy SOWA” – Brzesko</li>
  <li>Piotr i Monika Kądziołka – Mokrzyska</li>
  <li>Ochotnicza Straż Pożarna – Mokrzyska</li>
  <li>Portal Cappucino - Brzesko</li>
  <li>Firma ND Tomasz Matras - Mokrzyska</li>
  <li>Motocykliści ze Stowarzyszenia HDK Moto - Jadowniki</li>
  <li>Redakcja Gość Niedzielny - Oddział Tarnów</li>
  <li>Oraz wszystkie Kochane Panie, które dostarczyły wspaniałe, smaczne, własnoręcznie upieczone ciasto i ciasteczka na nasz wspólny Piknik.</li>

</ul>

<p><span>Sponsorzy Nagród w loterii</span></p>
<p><span>I Nagroda</span></p>
<p>Barbara i Józef Styrna – Mokrzyska.</p>
<p><span>II nagroda</span></p>
<p>Firma Sprint Recykling Skup Złomu i Metali Kolorowych – Tarnów- Paweł Stefański i Piotr Stypka.</p>
<p><span>III Nagroda</span></p>
<p>Firma Handlowo–Usługowa „Grek–Bruk” – Grzegorz Zgraja – Poręba Spytkowska.</p>


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

export default Service_piknik;
