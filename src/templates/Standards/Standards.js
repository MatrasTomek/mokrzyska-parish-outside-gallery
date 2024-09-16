import styles from "./standards.module.scss";

const Standards = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}></div>
			<div className={styles.inside}>
				<h1>Standardy Ochrony Małoletnich w parafii Mokrzyska</h1>
				<div className={styles.links}>
					<a
						href="./documents/Standardy_Ochrony_Małoletnich_w_parafii_Mokrzyska.pdf"
						download="Standardy_Ochrony_Małoletnich_w_parafii_Mokrzyska.pdf"
					>
						Standardy Ochrony Małoletnich w parafii Mokrzyska
					</a>
					<a
						href="./documents/Zespol_do_spraw_prefencji_NSPJ.pdf"
						target="blank"
					>
						Zespół do spraw Prefencji w parafii Mokrzyska
					</a>

				</div>
			</div>
		</div>
	);
};

export default Standards;