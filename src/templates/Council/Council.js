import styles from "./council.module.scss";

const Council = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}></div>
			<div className={styles.inside}>
				<h1>Rada Duszpasterska Parafii Mokrzyska</h1>
				<div className={styles.links}>
					<a
						href="./documents/Zarzadzenie_wyborow_Rad_Duszpasterskich_w_Diecezji_Tarnowskiej.pdf"
						target="blank"
					>
						Zarządzenie wyborów Rad Duszpasterskich w Diecezji Tarnowskiej
					</a>
					<a
						href="./documents/Regulamin_wyboru_Parafialnej_Rady_Duszpasterskiej_w_Diecezji_Tarnowskiej.pdf"
						target="blank"
					>
						Regulamin wyboru Parafialnej Rady Duszpasterskiej w Diecezji Tarnowskiej
					</a>
					<a href="./documents/Wyniki_wyborow_do_Rady_Duszpasterskiej.pdf" target="blank">
						Wyniki wyborów do Rady Duszpasterskiej
					</a>
					<a
						href="./documents/Statut_Parafialnej_Rady_Duszpasterskiej_w_Diecezji_Tarnowskiej.pdf"
						target="blank"
					>
						Statut Parafialnej rady Duszpasterskiej w Diecezji Tarnowskiej
					</a>
					<a
						href="./documents/Statut_Parafialnej_Rady_Ekonomicznej_w_Diecezji_Tarnowskiej.pdf"
						target="blank"
					>
						Statut Parafialnej Rady Ekonomicznej w Diecezji Tarnowskiej
					</a>
				</div>
			</div>
		</div>
	);
};

export default Council;
