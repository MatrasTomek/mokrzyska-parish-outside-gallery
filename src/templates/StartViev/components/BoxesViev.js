import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../../../Data/sliderForGallery";
import Button from "../../../components/Buttons/Button";

import styles from "./boxesViev.module.scss";

const BoxesViev = () => {
	const [index, setIndex] = useState(0);


	//TM commented for non show gallery

	// let indexNo = index;
	// const changeIndex = () => {
	// 	indexNo++;
	// 	if (indexNo === ITEMS.length) {
	// 		indexNo = 0;
	// 	}
	// 	setIndex(indexNo);
	// };

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		changeIndex();
	// 	}, 5000);

	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// });

	// const sliders = ITEMS.map((item) => (
	// 	<div
	// 		key={item.id}
	// 		className={styles.image}
	// 		style={{ right: "100%", backgroundImage: `url(${item.path})` }}
	// 	></div>
	// ));

	// const slideShow = () => {
	// 	sliders[index].props.style.right = "0%";
	// };
	// slideShow();
	return (
		<div className={styles.boxes}>
			<div className={styles.outside}>
				<Link to="/nabozenstwa">
					<div>
						<h2>nabożeństwa</h2>
						<h3>Msze św. w niedziele:</h3>
						<p>odprawiane są o:</p>
						<span>7:30, 10:30, 15:00</span>
						<h3>Msze św. w tygodniu:</h3>
						<span>o godz. 18:00</span>
						<h3>W soboty:</h3>
						<span>o godz. 6.30</span>
						<Button name="zobacz" />
					</div>
				</Link>
			</div>
			<div className={styles.outside}>
				<Link to="/kancelaria">
					<div>
						<h2>kancelaria</h2>
						<h3>Godziny urzędowania:</h3>
						<p>codziennie 18.30 – 19.00</p>
						<p>W soboty, niedziele i święta zamknięte</p>
						<Button name="zobacz" />
					</div>
				</Link>
			</div>
			<div className={styles.outside}>
				<Link to="/intencje">
					<div>
						<h2>intencje</h2>
						<div className={styles.sentence}>
							<p>
								"Jedna dobrze przeżyta Komunia Święta zdolna jest zmienić nas w świętych i doskonałych"
							</p>
							<p>św. Franciszek Salezy</p>
						</div>
						<Button name="zobacz" />
					</div>
				</Link>
			</div>
			<div className={styles.outside}>
				<Link to="/intencje-poza-parafia">
					<div>
						<h2>intencje poza parafią</h2>
						<div className={styles.sentence}></div>
						<Button name="zobacz" />
					</div>
				</Link>
			</div>

			<div className={styles.outside}>
				<Link to="/ogloszenia">
					<div>
						<h2>ogłoszenia</h2>
						<p>Jedynie czytaniem krzepi się duszę.</p>
						<Button name="zobacz" />
					</div>
				</Link>
			</div>

			{/* <div className={styles.outside}>
				<div className={styles.slider}>{sliders}</div>
				<a href="http://www.galeria.parafiamokrzyska.pl">
					<div>
						<h2>galeria</h2>

						<Button name="zobacz" />
					</div>
				</a>
			</div> */}
			<div className={styles.outside}>
				<Link to="/rada">
					<div>
						<h2>rada duszpasterska</h2>
						<p></p>
						<Button name="zobacz" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BoxesViev;
