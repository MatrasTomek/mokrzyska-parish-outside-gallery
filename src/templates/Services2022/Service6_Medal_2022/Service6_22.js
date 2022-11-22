import React, { useState } from "react";
import ItemImage from "../../../components/ImageItemNoCopy/ItemImage";

import styles from "../stylesForPic.module.scss";

const Service6_22 = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [pictureNo, setPictureNo] = useState(false);

	const handleShowPicture = (e) => {
		setModalOpen(true);
		setPictureNo(Number(e.target.id));
		console.log(e.target.id);
	};

	const catalogName = "medal_lechowicz_2022";
	// const pictureEnd = "";
	const arrayOfPictures = [];

	for (let i = 1; i < 32; i++) {
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
			<h3></h3>
			<p>
				W dniu 20 listopada 2022 roku w Uroczystość Chrystusa Króla Wszechświata w Katedrze Tarnowskiej o
				godzinie 10.30 odbyła się Msza święta pod przewodnictwem JE księdza biskupa Andrzeja Jeża. Jest to
				patronalne święto Akcji Katolickiej.
			</p>
			<p>
				W Eucharystii wzięli udział, przedstawiciele naszego Parafialnego Oddziału Akcji Katolickiej, Pani
				Prezes Ewa Adamczyk oraz Asystent dekanalny, dekanatu Szczepanowskiego Ks. Stanisław Tokarski -
				Proboszcz parafii Mokrzyska.
			</p>
			<p>
				Podczas tej Eucharystii nasz parafanin Ludwik Lechowicz, został odznaczony medalem, Dei Regno Servire,
				tzn. Służyć Krolestwu Bożemu. Gratulujemy Członkom Akcji Katolickiej oraz Panu Ludwikowi i życzymy
				wytrwałości, Bożego błogosławieństwa oraz łaski zdrowia.
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

export default Service6_22;
