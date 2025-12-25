import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import styles from './box.module.scss';

const BoxInformation = () => {
	const [flag, setFlag] = useState(true);

	const history = useHistory();

	const handleOnGoToSite = () => {
		setFlag(false);
		history.push('/temporary');
		setFlag(false);
	};

	const handleCloseButton = () => {
		setFlag(false);
	};
	return (
		<div
			className={styles.wrapper}
			style={{
				display: `${flag ? 'block' : 'none'}`,
			}}
		>
			<div className={styles.inside}>
				<div className={styles.info}>
					<p className={styles.sentence}>A Słowo Ciałem się stało i zamieszkało wśród nas.</p>
					<p>
						Wszystkim, którzy łączą się w tym czasie w przestrzeni wiary, życzę radości z faktu że, Bóg stał się człowiekiem dla
						naszego zbawienia i narodził się w Betlejem. Niech ta prawda przenika nasze serca każdego dnia, niech staje się
						źródłem niewyczerpanej nadziei, radości i pokoju. Niech tęsknota za pełnią życia bez końca, prowadzi nas ku Temu,
						który Jako jedyny może wypełnić najgłębsze pragnienia ludzkiego serca.{' '}
					</p>
					<p className={styles.sign1}>Szczęść Boże.</p>
					<p className={styles.sign1}>ks. Tomasz Szewczyk</p>

					<div className={styles.exit}>
						{' '}
						<Button name="X" onClick={handleCloseButton} />
					</div>
					{/* <div className={styles.look}>    <Button name="zobacz" onClick={handleOnGoToSite} /></div> */}
				</div>
			</div>
		</div>
	);
};

export default BoxInformation;
