import { React, useState } from "react";
// import { useHistory } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./box.module.scss";

const BoxInformation = () => {
	const [flag, setFlag] = useState(true);

	// const history = useHistory();

	// const handleOnGoToSite = () => {
	// 	setFlag(false);
	// 	history.push("/temporary");
	// };

	const handleCloseButton = () => {
		setFlag(false);
	};
	return (
		<div
			className={styles.wrapper}
			style={{
				display: `${flag ? "block" : "none"}`,
			}}
		>
			<div className={styles.inside}>
				<div className={styles.info}>
					<p>
						Wszystkim Parafianom i sympatykom naszej parafii, pragnę przekazać serdeczne życzenia na Święta
						Bożego Narodzenia i Nowy Rok 2023.{" "}
					</p>
					<p>
						Niech Chrystus w tajemnicy Bożego Narodzenia obdarza wszystkich obfitymi łaskami, pokojem i
						radością. Niech Maryja Bogarodzica uprasza potrzebne łaski na każdy dzień.
					</p>
					<p>Niech na każdym z nas spełnią się słowa błogosławieństwa z Księgi Liczb:</p>
					<p>
						„Niech cię Pan błogosławi i strzeże. Niech Pan rozpromieni oblicze swe nad tobą, niech cię
						obdarzy swą łaską. Niech zwróci ku tobie oblicze swoje i niech cię obdarzy pokojem” (Lb 6,
						24-26).
					</p>
					<p>Z darem modlitwy i wdzięcznością </p>
					<p>Ks. Stanisław Tokarski - Proboszcz</p>
					{/* <Button name="przeczytaj" onClick={handleOnGoToSite} /> */}
					<div className={styles.buttons}>
						<Button name="zamknij" onClick={handleCloseButton} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxInformation;
