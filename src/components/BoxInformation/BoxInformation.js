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
					<h2>SPOWIEDŹ PONIEDZIAŁEK 19 GRUDNIA</h2>
					<p>14.30 – 15.45</p>
					<p>16.15 – 17.30</p>
					<h3>PRZERWA: od 15.45 do 16.15</h3>
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
