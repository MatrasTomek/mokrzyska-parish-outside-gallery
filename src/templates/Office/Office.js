import styles from "./office.module.scss";

const Office = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.title}>
          <h1>Kancelaria</h1>
          <h3>Godziny urzędowania:</h3>
          <p>codziennie 18.30 – 19.00</p>
          <p>w soboty, niedziele i święta zamknięte</p>
        </div>
        <div className={styles.item}>
          <h3>CHRZEST</h3>
          <p>
            Chrzest jest najpiękniejszym i najwspanialszym darem Boga. Nazywamy
            go darem, łaską, namaszczeniem, oświeceniem, szatą
            niezniszczalności, obmyciem odradzającym, pieczęcią i wszystkim, co
            może być najcenniejsze. Darem - ponieważ jest udzielany tym, którzy
            nic nie przynoszą; łaską - ponieważ jest dawany nawet tym, którzy
            zawinili; chrztem - ponieważ grzech zostaje pogrzebany w wodzie;
            namaszczeniem - ponieważ jest święty i królewski (a królów się
            namaszcza); oświeceniem - ponieważ jest jaśniejącym światłem; szatą
            - ponieważ zakrywa nasz wstyd; obmyciem - ponieważ oczyszcza;
            pieczęcią - ponieważ strzeże nas i jest znakiem panowania Boga (św.
            Grzegorz z Nazjanzu).
          </p>
          <span>
            Chrzest w naszej parafii odbywa się w każdą niedzielę podczas Mszy
            św. o godz. 10.30 (Możliwy jest także chrzest w inne dni tygodnia po
            uzgodnieniu w kancelarii)
          </span>
          <p>
            Wymagane dokumenty, dane przy zapisywaniu dziecka do chrztu w
            godzinach otwarcia kancelarii:
          </p>
          <ul>
            <li>akt urodzenia dziecka wydany przez Urząd Stanu Cywilnego,</li>
            <li>data i miejsce ślubu kościelnego rodziców,</li>
            <li>
              dane o rodzicach (data i miejsce urodzenia, imiona rodziców) i
              rodzicach chrzestnych (imiona, nazwiska i adresy zamieszkania,
            </li>
            <li>
              w przypadku zamieszkania dziecka wraz z rodzicami poza naszą
              parafią – zgoda proboszcza miejsca zamieszkania na chrzest poza
              parafią.
            </li>
          </ul>
          <p>
            Rodzice i chrzestni powinni przystąpić do spowiedzi świętej i
            przyjąć Komunię świętą w intencji dziecka, dlatego otrzymują przy
            wpisywaniu dziecka do Księgi Chrztów kartki do spowiedzi, które
            wręczają kapłanowi przed spowiedzią.
          </p>

          <p>
            <span>Rodzicami chrzestnymi mogą być</span> - praktykujący katolicy,
            którzy przyjęli sakrament bierzmowania. Powinni okazać stosowne
            zaświadczenie od proboszcza własnej parafii.
          </p>
          <span>Z funkcji rodziców chrzestnych wykluczone są osoby:</span>
          <ul>
            <li>Niepraktykujące</li>
            <li>Pozostające w cywilnych związkach małżeńskich</li>
          </ul>
          <span>
            Prosimy o punktualne przybycie na Mszę Świętą chrzcielną oraz
            zabranie ze sobą:
          </span>
          <ul>
            <li>Białej szaty</li>
            <li>Świecy chrzcielnej</li>
          </ul>
          <span>
            W przypadku uzasadnionych wątpliwości, czy dziecko zostanie
            wychowane w duchu wiary katolickiej, chrzest może być odłożony.
          </span>
        </div>
        <div className={styles.item}>
          <h3>MAŁŻEŃSTWO</h3>
          <p>
            Narzeczeni mają obowiązek zgłosić się do Kancelarii Parafialnej{" "}
            <span>najpóźniej 3 miesiące przed planowaną datą ślubu</span> w celu
            przeprowadzenia rozmowy i spisania protokołu prawno-kanonicznego. W
            przeciwnym razie trzeba prosić Kurię Diecezjalną o dyspensę od
            zachowania trzech miesięcy bezpośredniego przygotowania do zawarcia
            sakramentu małżeństwa.
          </p>
          <p>
            Potrzebne jest urzędowe stwierdzenie, ze strony Kościoła, czy
            kandydaci odpowiadają warunkom stawianym przez Kościół by mógł
            zaistnieć Sakrament Małżeństwa. Tzn., czy:
          </p>
          <ul>
            <li>są stanu wolnego,</li>
            <li>nie mają żadnych przeszkód małżeńskich,</li>
            <li>
              odpowiadają wszystkim wymogom, jakie stawia prawo, by małżeństwo
              było zawarte ważnie i godziwie.
            </li>
          </ul>
          <span>Co należy przynieść:</span>
          <ul>
            <li>Dowody osobiste.</li>
            <li>
              Metryki chrztu (niedawno wydane). Ważność metryki potrzebnej do
              ślubu wynosi sześć miesięcy, licząc od daty wystawienia do daty
              ślubu. Metrykę wybieramy osobiście w parafii, w której zostaliśmy
              ochrzczeni. Metrykę może odebrać w imieniu zainteresowanej osoby
              inna pełnoletnia osoba (np. rodzic), jeżeli przedstawi w
              kancelarii parafialnej pisemne pełnomocnictwo sporządzone zgodnie
              z zasadami prawa cywilnego (wzory można łatwo znaleźć w
              internecie) – ma ono zawierać miejsce i datę wystawienia,
              własnoręczny podpis osoby udzielającej pełnomocnictwa oraz jej
              dane). Jeżeli ktoś został ochrzczony w parafii, w której spisywany
              jest protokół przedślubny, nie przedkłada metryki chrztu.
            </li>
            <li>
              Wdowiec i wdowa przedkładają świadectwo zgonu współmałżonka.
            </li>
            <li>Świadectwa nauki religii z ostatniej klasy szkoły średniej.</li>
            <li>
              Dokumenty z Urzędu Stanu Cywilnego, które są potwierdzeniem stanu
              wolnego i brakiem przeszkód od strony cywilnej. Dokumenty te są
              podpisywane podczas ceremonii zawierania Sakramentu Małżeństwa.
              Narzeczeni muszą sami zadbać, aby te dokumenty do parafii
              dostarczyć.
            </li>
            <li>
              Świadectwa katechizacji przedmałżeńskiej (tzw. „Kurs
              przedmałżeński”). Kurs ten jest wymagany do zawarcia Sakramentu
              Małżeństwa i trzeba wcześniej zatroszczyć się o jego ukończenie.
            </li>
            <li>
              Jeżeli osoby zawarły wcześniej związek cywilny dokument
              potwierdzający ten fakt.
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3>POGRZEB</h3>
          <span>Dokumenty potrzebne do pogrzebu katolickiego:</span>
          <ul>
            <li>
              Akt zgonu z USC (bez tego dokumentu pogrzeb nie może się odbyć).
            </li>
            <li>
              W przypadku zmarłych, którzy mieszkali poza naszą parafią,
              konieczna jest pisemna zgoda na pogrzeb z parafii ostatniego
              miejsca zamieszkania.
            </li>
          </ul>
          <p>
            Zachęcamy rodzinę zmarłej osoby do przystąpienia do spowiedzi przed
            Mszą św. pogrzebową, a w czasie Eucharystii do przyjęcia Komunii św.
            w intencji zmarłego.
          </p>
          <p>
            Z chwilą pogrzebu niech nie kończy się nasza troska o osoby, które
            odeszły. Pamiętajmy o nich w codziennych modlitwach, prosząc
            Miłosiernego Boga, by darował im winy i przyjął do chwały
            zbawionych.
          </p>
          <p>
            Szczególną pomocą dla zmarłych są Msze św., modlitwy wypominkowe
            (roczne i listopadowe) oraz zwyczaj odprawiania Mszy Świętych
            gregoriańskich.
          </p>
          <p>
            Intencje Mszy św. za zmarłego można zamawiać w kancelarii i będą one
            zapisane w Księdze Intencji naszej parafii. Natomiast intencje
            zamawiane w zakrystii bezpośrednio przed pogrzebem będą w większości
            przekazane do odprawienia poza naszą parafię (misjonarze, księża
            rodacy, księża emeryci).
          </p>
        </div>
        <div className={styles.item}>
          <h3>SAKRAMENT CHORYCH</h3>
          <p>
            Z Sakramentu Namaszczenia Chorych w naszej parafii można skorzystać
            z okazji <span>I Piątku miesiąca</span>, po uprzednim zgłoszeniu
            chorego w kancelarii parafialnej.{" "}
            <span>
              W nagłych przypadkach o każdej porze dnia i nocy, dzwoniąc na
              telefon.
            </span>
          </p>
          <p>
            Sakramentu namaszczenia chorych udziela się osobom chorym, udającym
            się na operację, będącym w podeszłym wieku, a także w ostatniej
            godzinie życia. Tak jak pozostałe sakramenty, tak i sakrament
            namaszczenia przeznaczony jest wyłącznie dla żyjących!. Po
            stwierdzeniu zgonu kapłan nie może go już udzielić.
          </p>
          <p>
            Na czas udzielania sakramentu chorych: spowiedzi, Komunii św. i
            namaszczenia olejami św. w mieszkaniu chorego koniecznie należy
            przygotować:
          </p>
          <ul>
            <li>stół nakryty białym obrusem,</li>
            <li>postawić na nim krzyż, dwie świece.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Office;
