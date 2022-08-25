import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Store/StoreProvider";

import { CONTACT_INFORMATION } from "../../Data/contactInformation";

import styles from "./footer.module.scss";

const Footer = () => {
	const { visitorsObj, visitorsMonthObj } = useContext(StoreContext);
	const { name, adress, phone, person, bank, account, nip, regon } = CONTACT_INFORMATION;
	return (
		<div className={styles.wrapper}>
			<div className={styles.inside}>
				<div className={styles.logo}></div>
				<div className={styles.adress}>
					<h3>{name}</h3>
					<p>adres: {adress}</p>
					<p>bank: {bank}</p>
					<p>Nr konta: {account}</p>
					<p>Nip: {nip}</p>
					<p>Regon: {regon}</p>
					<h4>Liczba odwiedzin strony: {!visitorsObj ? "" : visitorsObj}</h4>
					<h4>w tym miesiącu: {!visitorsMonthObj ? "" : visitorsMonthObj}</h4>
				</div>
				<div className={styles.contact}>
					<h4>Proboszcz </h4>
					<h4>{person}</h4>
					<p>telefon: {phone}</p>
				</div>
				<div className={styles.politics}>
					<div className={styles.copyright}>
						<p>&copy;Parafia Mokrzyska 2022</p>
					</div>
					<Link to="/rodo">Polityka prywatności</Link>
				</div>
				<div className={styles.producer}>
					<a href="https://www.developerweb.pl/" target="blanc">
						www.developerweb.pl
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
