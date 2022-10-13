import React, { useState } from "react";
import ItemImage from "../../../components/ImageItemNoCopy/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service20_22 = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [pictureNo, setPictureNo] = useState(false);

	const handleShowPicture = (e) => {
		setModalOpen(true);
		setPictureNo(Number(e.target.id));
		console.log(e.target.id);
	};

	const catalogName = "piknik_2022";
	// const pictureEnd = "";
	const arrayOfPictures = [];

	for (let i = 1; i < 423; i++) {
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
			<h3>Piknik Parafialny Parafia z Sercem, Mokrzyska 2022.</h3>
			<p>
				{" "}
				W niedzielę 28.09.2022r. odbył się II Piknik Parafialny pod hasłem „Parafia z Sercem”. Bardzo się
				cieszymy, że przybyliście tak licznie, żeby spędzić cudownie czas w gronie parafialnym. Z tej okazji
				chcielibyśmy bardzo podziękować wszystkim wspólnotom parafialnym i osobom dobrej woli, które włożyły
				mnóstwo pracy i serca, żebyśmy mogli świętować ten dzień w wyjątkowej, rodzinnej atmosferze.
			</p>
			<p>
				Dziękujemy wszystkim, którzy przyczynili się do organizacji tego wydarzenia, a przede wszystkim
				organizatorom tego wydarzenia. Za pełne zaangażowanie, poświęcenie swojego czasu i czuwanie nad
				przebiegiem całej imprezy do samego końca. Dziękujemy wszystkim, za całą pomoc podczas trwania pikniku
				przy montażu stanowisk, sceny, oświetlenia, przy zakupach, sprzątaniu, w organizacji i stworzeniu
				plakatów wydarzenia, pracach technicznych, dźwiękowych, medialnych i logistycznych. Bez Was
				pomagających, nie udało by się przygotować na czas wszystkich stanowisk, a po zakończeniu imprezy
				wszystkiego posprzątać. Wielki Bóg zapłać!. Dziękujemy także wszystkim małym wykonawcom, którzy tak
				chętnie po raz pierwszy wystąpili na „parafialnej scenie piknikowej” a były to dzieci z naszego
				Publicznego Przedszkola Parafialnego. Wszystkim dzieciom, ich rodzicom i nauczycielom, którzy
				dostarczyli nam wszystkim niezwykłych przeżyć artystycznych pięknie dziękujemy!. Dziękujemy sponsorom,
				darczyńcom, którzy wsparli rzeczowo i finansowo to duże przedsięwzięcie oraz wszystkim tym, którzy
				przyczynili się do organizacji tego wydarzenia, a w szczególności do występu gwiazd wydarzenia –
				„Kordiana” i „Zbójów” z Zakopanego. Bardzo dziękujemy naszym parafiankom za przygotowanie i dostarczenie
				pysznego ciasta i ciasteczek. Dziękuję Drogim Paniom i Panom którzy działali na zapleczu, więc nie było
				ich widać, ale za to owocem ich działań była bezcenna praca przy organizacji stanowisk z ciastami,
				napojami, gastronomią i grillem. Podziękowania kieruję w stronę naszych parafian i nie tylko: za
				wypożyczenie ławek, stolików, krzeseł, grilli, chłodni, lodówek, koszy, namiotów i parasoli. Dziękuję
				Motocyklistom ze Stowarzyszenia HDK Moto Jadowniki, którzy zafascynowali nas swoją pasją oraz sposobem
				na czerpanie radości z życia. Dzięki mediom, cały piknik został uwieczniony na fotografiach i parafia ma
				niesamowitą fotorelację. Dziękujemy Wam pięknie, za tą pracę medialną. Dziękujemy też służbom
				mundurowym: Ochotniczej Straży Pożarnej z Mokrzysk oraz Policji za obecność na wydarzeniu i czujne oko
				względem bezpieczeństwa.
			</p>
			<p>Kochani, bez Was i Waszej pięknej pracyzespołowej nic nie udałoby się tak wspaniale.</p>
			<p>Wielkie dzięki i niech Pan Wam Błogosławi a Matka Boża osłania Was swoim płaszczem matczynej dobroci.</p>

			<p className={styles.italic}>
				<span>Proboszcz Stanisław Tokarski</span>
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

export default Service20_22;
