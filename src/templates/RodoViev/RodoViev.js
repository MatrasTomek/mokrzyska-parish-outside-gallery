import React from "react";

import { RODO_AND_COOKIE } from "../../Data/Rodo";

import styles from "./rodoViev.module.scss";

const RodoViev = () => {
  const rodoDate = [];
  RODO_AND_COOKIE.map((item) => rodoDate.push(item));

  const contentViev = (
    <div className={styles.wrapper}>
      <h1>Polityka RODO i Ciasteczek.</h1>

      <h2>Administrator danych osobowych informuje, że wszystkie dane osobowe na stronie internetowej parafii pod wezwaniem Najświętszego Serca Pana Jezusa w Mokrzyskach, umieszczone zostały za zgodą osób, których dane dotyczą lub umieszczone są na podstawie prawa (zob. Podręcznik Kościelnego Inspektora Ochrony Danych wersja nr 3, strona 66).</h2>

      <h3>Polityka prywatności serwisu Parafii pw. Najświętszego Serca Pana Jezusa w Mokrzyskach</h3>
      <div>
        <p>Troszczymy się o dane osobowe zgodnie z Ogólnym Rozporządzeniem o Ochronie Danych (RODO) oraz Dekretem Konferencji Episkopatu Polski (Dekret ogólny w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych w Kościele katolickim z 13 marca 2018 roku).</p>
        <ul>
        <li>Administratorem danych osobowych jest Parafia Rzymskokatolicka pod wezwaniem Najświętszego Serca Pana Jezusa w Mokrzyskach 32-800 Mokrzyska, Dobrego Pasterza 2, woj. Małopolskie, email: mokrzyskaparafia@gmial.com, telefon: 14-686-80-20.

</li>
<li>
Dane oraz wizerunek osób mogą być udostępniane przez Administratora danych osobowych podmiotom kościelnym oraz podmiotom uprawnionym do ich uzyskania na podstawie odrębnych przepisów prawa.
</li>
<li>
Dane gromadzimy wyłącznie w celu realizacji działań statutowych Kościoła katolickiego.
</li>
<li>
Udostępnianie danych wizerunkowych osób związane jest z relacjonowaniem wydarzeń w Parafii pod wezwaniem Najświętszego Serca Pana Jezusa w Mokrzyskach.
</li>
<li>
Stosujemy organizacyjne i techniczne środki bezpieczeństwa, aby chronić dane przed nieuprawnionym dostępem.
</li>
<li>
Kontaktując się z Serwisem zgadza się Pan/Pani na przetwarzanie danych (imię, nazwisko, adres poczty elektronicznej, adres pocztowy, numer telefonu lub innych dobrowolnie podanych danych) w celu przekazania odpowiedzi. Podanie danych osobowych jest dobrowolne, ale warunkuje możliwość podjęcia działań przez Administratora danych osobowych
</li>
<li>
W przypadku prawnie uzasadnionego zgłoszenia wniosku o usunięcie Pani/Pana danych osobowych i/lub fotografii z Serwisu, dane usuniemy bez zbędnej zwłoki, jednak nie później niż w ciągu 3 dni od daty zgłoszenia przez Panią/Pana takiego wniosku.
</li>
<li>
Zebrane dane nie będą przekazywane poza obszar Unii Europejskiej.
</li>
<li>
Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.
</li>
<li>
Jeżeli jest Pan/Pani użytkownikiem Serwisu posiada Pan/Pani następujące prawa:
<ul>
  <li>prawo dostępu do treści swoich danych osobowych na zasadach określonych przepisami o ochronie danych osobowych</li>
  <li>prawo do sprostowania danych,</li>
  <li>prawo do usunięcia danych,</li>
  <li>prawo do wniesienia skargi do organów właściwych ze względu na ochronę danych osobowych,</li>
  <li>prawo do ograniczenia przetwarzania swoich danych osobowych</li>
  <li>prawo do bycia zapomnianym na zasadach określonych stosownymi przepisami o ochronie danych osobowych.</li>
</ul>
</li>
<li>Wszelkie zgłoszenia i informacje związane z ochroną danych osobowych można kierować do Inspektora Ochrony Danych dla Parafii Mokrzyska: tel. 14-686-80-20, e-mail: mokrzyskaparafia@gmial.com</li>
<li>
Przysługuje Pani/Panu prawo wniesienia sprzeciwu wobec przetwarzania danych oraz prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych – Prezesa Urzędu Ochrony Danych Osobowych (w sprawach regulowanych prawem świeckim) lub Kościelnego Inspektora Ochrony Danych (w zakresie objętym prawem kanonicznym).
</li>
        </ul></div>

      <h3>{rodoDate[0].title}</h3>
      <p>{rodoDate[0].content}</p>
      <a href="mailto:mokrzyskaparafia@gmial.com">{rodoDate[0].email}</a>

      <h3>{rodoDate[1].title}</h3>
      <p>{rodoDate[1].content}</p>
      <a href="mailto:mokrzyskaparafia@gmial.com">{rodoDate[1].email}</a>



      <h3>{rodoDate[3].title}</h3>
      <p>{rodoDate[3].content}</p>
      <h3>{rodoDate[4].title}</h3>
      <p>{rodoDate[4].content}</p>
      <p>{rodoDate[2].content}</p>
    </div>
  );
  return <>{contentViev}</>;
};
export default RodoViev;
