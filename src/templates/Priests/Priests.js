import React from 'react';
import styles from './priests.module.scss';

const Priests = () => {
	return (
		<div className={styles.wrapper}>
			<h2>Duszpasterze z parafii Mokrzyska</h2>
			<div className={styles.priest}>
				<div className={styles.name}>
					<h3>Ks. Marian Wal</h3>
					<p>
						<span>1981-2007</span>
					</p>
				</div>
			</div>
			<div className={styles.priest}>
				<div className={styles.name}>
					<h3>Ks. Jan Panek</h3>
					<p>
						<span>2007-2020</span>
					</p>
				</div>
			</div>
			<div className={styles.priest}>
				<div className={styles.name}>
					<h3>Ks. Stanisław Tokarski</h3>
					<p>
						<span>2020–2025</span>
					</p>
				</div>
				<div className={styles.info}>
					<p>
						Urodzony 17 kwietnia 1974 roku w Brzesku, jako syn Mariana i Rozalii z domu Zięć. Absolwent Technikum, studia
						filozoficzno - teologiczne w Wyższym Seminarium Duchowym w Tarnowie, kapłan diecezji tarnowskiej od 2001 roku. Po
						święceniach kapłańskich posługiwał duszpastersko na zastępstwie w parafii Złota i Tarnopol (Ukraina).{' '}
					</p>
					<p>
						Od 27 sierpnia 2001 roku podjął obowiązki wikariusza i katechety w parafii Niedomice. W roku 2002 objął stanowisko
						wychowawcy młodzieży w Zespole Szkół w Niedomicach. W 2004 roku podjął obowiązki wikariusza w parafii św. Jakuba w
						Brzesku. Równocześnie podjął obowiązki katechety w Zespole Szkół Ponadgimnazjalnych nr 2 i Prefekta Szkoły
						Katolickiej w Brzesku.{' '}
					</p>
					<p>
						W 2006 roku ukończył studia podyplomowe z archiwistyki kościelnej na Uniwersytecie Śląskim w Katowicach, Prefekt ZSP
						nr 2 w Brzesku (2006-2009), Dyrektor Archiwum Diecezjalnego w Tarnowie (2009-2015), Od lutego 2015 do czerwca 2017
						roku pełnił posługę pomocy duszpasterskiej w parafii Matki Bożej Szkaplerznej w Tarnowie.{' '}
					</p>
					<p>
						W 2006 roku otrzymał nagrodę „Ambasadora” Gminy Iwkowa za działalność na rzecz promocji Gminy a w roku 2013 nagrodę
						Burmistrza Miasta Żabna za działalność na rzecz dzieci i młodzieży. Nominacją księdza Biskupa Ordynariusza Andrzeja
						Jeża, ks. Stanisław Tokarski z dniem 4 stycznia 2016 roku podjął posługę Delegata Kurii Diecezjalnej w Tarnowie do
						spraw pozyskiwania funduszy materialnych.{' '}
					</p>
					<p>
						W dniu 4 stycznia 2016 roku został powołany również na dyrektora ds. ekonomiczno-gospodarczych Kurii Diecezjalnej w
						Tarnowie. Autor publikacji: Dzieje parafii Wojakowa 1335-1772, Znani i Nieznani z parafii Wojakowa - Słownik
						Biograficzny T. I,, II., Dzieje parafii Wojakowa 1772 - 1939, I i II wojna światowa na terenie Gminy Iwkowa, Oświata
						i szkolnictwo na terenie Gminy Iwkowa w latach 1513 - 2008, Szkolnictwo w Niedomicach w latach 1912 - 2012,
						współautor publikacji: Archiwum Diecezjalne w Tarnowie - Historia i Zasób. Interesuje się historią regionalną,
						archiwistyką i genealogią. Za wydanie książki „I i II wojna światowa na terenie gminy Iwkowa”, został wybrany w roku
						2006 "Człowiekiem Roku Nieoficjalnego Portalu Brzeska i Okolic" www.brzesko.ws. Decyzją ks. Biskupa Ordynariusza z
						dniem 22 grudnia 2020 roku podjął posługę duszpasterską jako Proboszcza parafii NSP Jezusa w Mokrzyskach.{' '}
					</p>
					<p>
						<span>Obecnie w diecezji pełni funkcję jako:</span>
					</p>
					<ul>
						<li>Członek Diecezjalnej Komisji Kanonizacyjnej,</li>
						<li>Członek V Synodu Diecezji Tarnowskiej,</li>
						<li>Dekanalny Asystent Akcji Katolickiej w dekanacie Szczepanów,</li>
						<li>Członek Rady Kapłańskiej Diecezji Tarnowskiej.</li>
					</ul>
					<p>
						<span>Ponadto w parafii jest odpowiedzialny za:</span>
					</p>
					<ul>
						<li>Katechizację w Publicznej Szkole Podstawowej;</li>
						<li>Katechizację w Publicznym Przedszkolu Parafialnym;</li>
						<li>Sprawy duchowo - materialne;</li>
						<li>Radę Parafialną i Ekonomiczną;</li>
						<li>Akcję Katolicką;</li>
						<li>Caritas;</li>
						<li>Sprawy małżeńskie;</li>
						<li>Przygotowanie dzieci do I komunii świętej;</li>
						<li>Przygotowanie młodzieży do Sakramentu Bierzmowania</li>
						<li>Nadzwyczajnych Szafarzy Komunii Świętej;</li>
						<li>Dziewczęcą Służbę Maryjną;</li>
						<li>Aktualizację strony parafialnej;</li>
						<li>Liturgiczną Służbę Ołtarza.</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Priests);
