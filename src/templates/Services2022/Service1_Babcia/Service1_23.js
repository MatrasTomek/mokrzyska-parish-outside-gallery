import React, { useState } from "react";
import ItemImage from "../../../components/ImageItemNoCopy/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service1_23 = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [pictureNo, setPictureNo] = useState(false);

	const handleShowPicture = (e) => {
		setModalOpen(true);
		setPictureNo(Number(e.target.id));
		console.log(e.target.id);
	};

	const catalogName = "d_babci_2023";
	// const pictureEnd = "";
	const arrayOfPictures = [];

	for (let i = 1; i < 102; i++) {
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
			<h3>Dzień Babci i Dziadka 2023</h3>
			<p>W sobotę 21 stycznia w naszej parafii obchodziliśmy Dzień Babci i Dziadka. Uroczystości rozpoczęła Msza święta pod przewodnictwem Ks. Proboszcza, o oprawę której zadbali nauczyciele naszego Przedszkola Parafialnego na czele z Panem Andrzejem Gicalą. Po Mszy świętej zaprezentowały się dzieci z programem artystyczno-muzycznym. Następnie Ks. Proboszcz wyraził podziękowania wobec małych wykonawców i nauczycieli przygotowujących program muzyczny. Następnie Pani Dyrektor Przedszkola złożyła serdeczne życzenia dla wszystkich dziadków. Mali artyści otrzymali gromkie brawa od swoich dziadków. Po zakończeniu programu dziadkowie otrzymali drobny upominek od swoich wnucząt.  </p>

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

export default Service1_23;
