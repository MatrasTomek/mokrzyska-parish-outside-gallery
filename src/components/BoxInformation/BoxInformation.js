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
					<p style={{ textIndent: '2em', textAlign: 'justify' }}>
						Wszystkim, którzy łączą się w&nbsp;tym czasie w&nbsp;przestrzeni wiary, życzę radości z&nbsp;faktu że, Bóg stał się
						człowiekiem dla naszego zbawienia i&nbsp;narodził się w&nbsp;Betlejem. Niech ta prawda przenika nasze serca każdego
						dnia, niech staje się źródłem niewyczerpanej nadziei, radości i&nbsp;pokoju. Niech tęsknota za pełnią życia bez
						końca, prowadzi nas ku Temu, który jako Jedyny może wypełnić najgłębsze pragnienia ludzkiego serca.
					</p>
					<p className={styles.sign1}>Szczęść Boże.</p>
					<p className={styles.sign1}>ks. Tomasz Szewczyk</p>

					<div className={styles.exit}>
						{' '}
						<Button name="X" onClick={handleCloseButton} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxInformation;
