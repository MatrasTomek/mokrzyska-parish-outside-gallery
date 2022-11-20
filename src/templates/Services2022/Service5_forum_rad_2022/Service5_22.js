import React, { useState } from "react";
import ItemImage from "../../../components/ImageItem/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service5_22 = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [pictureNo, setPictureNo] = useState(false);

	const handleShowPicture = (e) => {
		setModalOpen(true);
		setPictureNo(Number(e.target.id));
		console.log(e.target.id);
	};

	const catalogName = "forum_rad_2022";
	// const pictureEnd = "";
	const arrayOfPictures = [];

	for (let i = 1; i < 8; i++) {
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
			<h3>Forum Parafialnych Rad Duszpasterskich.</h3>

			<p>Tarnów 19 XI 2022.</p>

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

export default Service5_22;
