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
							backgroundImage: `url(images/fatima_2022/75.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Zakończenie Nabożeństw Fatimskich. Mokrzyska 13.10.2022r.</h4>
					</div>
					<Link to="/fatima-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/piknik_2022/53.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Piknik Parafialny Parafia z Sercem, Mokrzyska 2022.</h4>
					</div>
					<Link to="/piknikParafialny2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/budowa_przedszkole_2022/26.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Obecne prace remontowe w Publicznym Przedszkolu Parafialnym w Mokrzyskach.</h4>
					</div>
					<Link to="/bud-przedsz-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/sandomierz_2022/19.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Wyjazd Liturgicznej Służby Ołtarza i Dziewczęcej Służby Maryjnej do Sandomierza</h4>
						<h4>18.07.2022r.</h4>
					</div>
					<Link to="/sandomierz-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/odpust_2022/66.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Niedziela Odpustu Parafialnego – 26 VI 2022r. </h4>
					</div>
					<Link to="/odpust-2022">
						<Button name="zobacz" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GridViev;
