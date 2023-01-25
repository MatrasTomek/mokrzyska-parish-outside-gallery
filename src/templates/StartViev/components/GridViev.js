import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Buttons/Button";

import styles from "./gridViev.module.scss";

const GridViev = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inside}>
			<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/koncert_kolend_2023/2.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Koncert kolęd i pastorałek</h4>
						<h4></h4>
					</div>
					<Link to="/kolendy-2023">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/d_babci_2023/53.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Dzień Babci i Dziadka 2023</h4>
						<h4></h4>
					</div>
					<Link to="/dzien-babci">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/swieta_2022/21.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Bożenarodzenie 2022.</h4>
					</div>
					<Link to="/swieta-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/mikolaj_2022/81.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>4 XII 2022r.</h4>
						<h4>
							Przyjęcie aspirantów do Grona ministrantów, dziewczynek do Dziewczęcej Służby Maryjnej oraz spotkanie że św.
							Mikołajem
						</h4>
					</div>
					<Link to="/mikolaj-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/grono_lektorow_2022/13.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Przyjęcie kandydatów do Grona Lektorów.</h4>
						<h4>Szczepanów 19 XI 2022.</h4>
					</div>
					<Link to="/lektorzy-2022">
						<Button name="zobacz" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GridViev;
