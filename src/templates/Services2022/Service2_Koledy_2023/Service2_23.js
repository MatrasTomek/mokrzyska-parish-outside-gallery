import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service2_23 = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [pictureNo, setPictureNo] = useState(false);

	const handleShowPicture = (e) => {
		setModalOpen(true);
		setPictureNo(Number(e.target.id));
		console.log(e.target.id);
	};

	const catalogName = "koncert_kolend_2023";
	// const pictureEnd = "";
	const arrayOfPictures = [];

	for (let i = 1; i < 38; i++) {
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
			<h3>Koncert kolęd i pastorałek</h3>

			<p>W niedzielę 22 stycznia 2023 roku w naszym kościele odbył się koncert kolęd i pastorałek w wykonaniu zespołu "Ewenement" z Niedomic. Zespół zaangażował się w oprawę muzyczną liturgii Mszy świętej a po jej zakończeniu odbył się 30 minutowy koncert. Dziękujemy parafianom i gościom za tak liczne przybycie.</p>

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

export default Service2_23;
