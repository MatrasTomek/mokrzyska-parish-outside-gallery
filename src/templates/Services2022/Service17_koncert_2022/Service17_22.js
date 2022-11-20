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

	const catalogName = "koncert_partiotyczny_2022";
	// const pictureEnd = "";
	const arrayOfPictures = [];

	for (let i = 1; i < 61; i++) {
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
				W naszej świątyni odbył się Koncert Patriotyczny w wykonaniu Młodzieżowej Orkiestry: CRUSHED SOUNDS BIG
				BAND pod dyrekcją Pawła Swoszowskiego. Koncert dofinansowany jest ze środków Powiatu Brzeskiego.
			</h3>
			<h2>„Otwieramy Polskie Serca”</h2>

			<p>Mokrzyska 24.10.2022r.</p>

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
