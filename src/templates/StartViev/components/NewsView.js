import React from 'react';
import styles from './newsView.module.scss';

const NewsView = () => {
	return (
		<div className={styles.newsWrapper}>
			<h2>Aktualności</h2>
			<div className={styles.newsItem}>
				<a href="./documents/news/Misje_Swiete.pdf" target="blank">
					<div className={styles.newsTitle}>
						{' '}
						<h3>MISJE ŚWIĘTE 11 – 16.05.2025 r. PARAFIA NAJŚWIĘTSZEGO SERCA PANA JEZUSA MOKRZYSKA</h3>
					</div>
				</a>
			</div>
		</div>
	);
};

export default NewsView;
