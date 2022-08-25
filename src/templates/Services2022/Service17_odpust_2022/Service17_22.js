import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service17_22 = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [pictureNo, setPictureNo] = useState(false);

	const handleShowPicture = (e) => {
		setModalOpen(true);
		setPictureNo(Number(e.target.id));
		console.log(e.target.id);
	};

	const catalogName = "odpust_2022";
	// const pictureEnd = "";
	const arrayOfPictures = [];

	for (let i = 1; i < 124; i++) {
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
			<h3>Niedziela Odpustu Parafialnego – 26 VI 2022 r. </h3>
			<h2>W tym dniu uroczyście oddaliśmy cześć Najświętszemu Sercu Pana Jezusa. </h2>
			<p>
				Odpust parafialny to święto związane z tytułem kościoła. Dziękuję wszystkim za udział w uroczystości
				odpustowej ku czci Najświętszego Serca Pana Jezusa.{" "}
			</p>
			<p>
				Dziękuję Księdzu Profesorowi Józefowi Młyńskiemu za przewodniczenie uroczystej Sumie odpustowej i
				wygłoszone homilie na wszystkich Mszach świętych.{" "}
			</p>
			<p>Dziękuję Ks. Prałatowi Marianowi Walowi za wspólną modlitwę i obecność.</p>
			<p>
				Dziękuję Panu Organiście, ministrantom, lektorom, Dziewczęcej Służbie Maryjnej, osobom które zadbały o
				oprawę liturgiczną Uroczystości: Pani Joannie, Panu Marcinowi i Panu Markowi, osobom niosącym baldachim,
				figury, symbole religijne, dzieciom w strojach komunijnych, sypiącym kwiaty oraz chłopcom dzwoniącym a
				także przybyłym gościom.{" "}
			</p>
			<p>Dziękuję Paniom: Małgorzacie, Barbarze i Andżelice za stronę kulinarną Uroczystości. </p>
			<p>
				Z serca dziękuję pewnej rodzinie za pokrycie kosztów zakupionych kwiatów, za kwotę 800 złotych na
				Uroczystość Odpustową, a Pani Małgorzacie Bober i Barbarze Sorocie składam wyrazy wdzięczności za
				wykonanie pięknej dekoracji kwiatowej.{" "}
			</p>
			<p>
				{" "}
				Szczególne podziękowania składam Pani Małgorzacie Motak i Pani Joannie Tabiś za posprzątanie naszego
				kościoła na Uroczystość Odpustową
			</p>
			<h4>Z darem modlitwy i wdzięcznością – Proboszcz Ks. Stanisław Tokarski</h4>

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

export default Service17_22;
