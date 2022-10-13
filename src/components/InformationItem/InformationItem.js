import React, { useState } from "react";

import Button from "../Buttons/Button";

import styles from "./informationItem.module.scss";

const InformationItem = ({ item }) => {
	const { dataOfAdd, title, informations } = item;

	const [showDetails, setShowDetails] = useState(false);

	const sortedInfo = informations.split(/\n/);
	const vievInformations = sortedInfo.map((item, index) => <li key={index}>{item}</li>);

	const handleShowDetails = () => {
		setShowDetails(!showDetails);
	};

	const showDetailsButton = !showDetails ? (
		<Button name="szczegóły" onClick={handleShowDetails} />
	) : (
		<Button name="ukryj" onClick={handleShowDetails} />
	);

	const showDetailsInfo = !showDetails ? "" : <ul>{vievInformations}</ul>;
	return (
		<div className={styles.wrapper}>
			<div>
				<p>
					{title} {dataOfAdd}
				</p>
			</div>
			<p>Ogłoszenia Parafialne:</p>
			{showDetailsButton}
			{showDetailsInfo}
		</div>
	);
};

export default InformationItem;
