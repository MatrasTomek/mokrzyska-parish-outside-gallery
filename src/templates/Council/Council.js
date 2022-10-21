
import styles from "./council.module.scss"

const Council = ()=>{
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}></div>
			<div className={styles.inside}>
				<h1>Rada Duszpasterska Parafii Mokrzyska</h1>
				<div className={styles.links}>
					<a href={"./Zarządzenie_wyborów_Rad_Duszpasterskich_w_Diecezji_Tarnowskiej.pdf"} target="blanc">
						Zarządzenie wyborów Rad Duszpasterskich w Diecezji Tarnowskiej
					</a>
					<a
						href={"./Regulamin_wyboru_Parafialnej_Rady_Duszpasterskiej_w_Dziecezji_Tarnowskiej.pdf"}
						target="blanc"
					>
						Regulamin wyboru Parafialnej Rady Duszpasterskiej w Dziecezji Tarnowskiej
					</a>
				</div>
			</div>
		</div>
	);
}

export default Council