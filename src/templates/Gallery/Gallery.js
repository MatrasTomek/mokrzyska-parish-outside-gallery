import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import styles from "./gallery.module.scss";

const Gallery = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inside}>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/budowa_przedszkole_2022/26.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Obecne prace remontowe w Publicznym Przedszkolu Parafialnym w Mokrzyskach.</h4>
					</div>
					<Link to="/bud-przedsz-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/sandomierz_2022/19.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Wyjazd Liturgicznej Służby Ołtarza i Dziewczęcej Służby Maryjnej do Sandomierza</h4>
						<h4>18.07.2022r.</h4>
					</div>
					<Link to="/sandomierz-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/odpust_2022/66.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Niedziela Odpustu Parafialnego – 26 VI 2022r. </h4>
					</div>
					<Link to="/odpust-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/boze_calo_2022/12.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Uroczystość Najświętszego Ciała i Krwi Chrystusa. Mokrzyska 16.06.2022r.</h4>
					</div>
					<Link to="/boze-cialo-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/szkola_70_lat_2022/125.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							Msza Dziękczynna z okazji 70-lecia Publicznej Szkoły Podstawowej im. Tadeusza Kościuszki w
							Mokrzyskach 11.06.2022 r.
						</h4>
					</div>
					<Link to="/70-lat-szkoly">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/majowka_zakonczenie_2022/35.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							Ukoronowanie Nabożeństw majowych przy kapliczce Matki Bożej z Dzieciątkiem przy ulicy
							Sąsiedzkiej.
						</h4>
					</div>
					<Link to="/majowka-zakonczenie-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/majowka_2022/15.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>"Majówka 2022" - spotkanie grup parafialnych.</h4>
					</div>
					<Link to="/majowka-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/s_florian_2022/11.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Poświęcenie figury Św, Floriana.</h4>
						<h4>Imienimy Księdza Proboszcza Stanisława Tokarskiego.</h4>
					</div>
					<Link to="/s-Florian-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/n_wielkanoc_2022/8.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Niedziela Wielkanocna, Mokrzyska 2022 - Procesja Rezurekcyjna</h4>
					</div>
					<Link to="/w-nie-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/w_sobota_2022/18.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Triduum Paschalne, Mokrzyska 2022 - Wielka Sobota</h4>
					</div>
					<Link to="/w-sob-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/w_piatek_2022/25.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Triduum Paschalne, Mokrzyska 2022 - Wielki Piątek</h4>
					</div>
					<Link to="/w-pia-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/w_czwartek_2022/34.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Triduum Paschalne, Mokrzyska 2022 - Wielki Czwartek</h4>
					</div>
					<Link to="/w-czwr-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/wielk_przedszk_2022/14.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							Poświęcenie pokarmów - Publiczne Przedszkole Parafialne w Mokrzyskach pw. Błogosławionej
							Karoliny Kózka
						</h4>
					</div>
					<Link to="/wielk-przedszk-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/rekolekcje_2022/20.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Rekolekcje Parafialne i Szkolne - Mokrzyska 2022</h4>
					</div>
					<Link to="/rekolekcje-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/n_palmowa_2022/17.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Obchody Niedzieli Palmowej - Mokrzyska 2022 </h4>
						<p>Konkurs na najwyższą i najpiękniejszą palmę.</p>
					</div>
					<Link to="/n-palmowa2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/aspiranci_2022/128.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Obrzęd przyjęcia aspirantów do grona ministrantów</h4>
						<p>Mokrzyska 03.04.2022r.</p>
					</div>
					<Link to="/aspiranci2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/paczka_ua_2022/6.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Paczka dla Ukrainy - Podziękowanie</h4>
					</div>
					<Link to="/paczka">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/historiaParafii/2.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Historia Parafii</h4>
					</div>
					<Link to="/historiaParafii">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/kolendowanie_2022/88.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Wspólne kolędowanie 23.01.2022r.</h4>
					</div>
					<Link to="/koledowanie2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/wystroj_bozonarodzeniowy/28.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Pasterka Parafii Mokrzyska 2021r.</h4>
					</div>
					<Link to="/bozenarodzenie2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/swiatlo_2021/10.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Przekazanie Światełka Pokoju, Mokrzyska 19.12.2021r.</h4>
					</div>
					<Link to="/swiatlo2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/medal_2021/5.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							Wręczenie złotego medalu Dei Regno Servire nadanego przez BISKUPA TARNOWSKIEGO Panu
							Stanisławowi Pukal
						</h4>
						<p>Mokrzyska 11.12.2021r.</p>
					</div>
					<Link to="/medal2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/mikolaj_2021/12.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Wizyta św. Mikołaja Biskupa 5.12.2021r.</h4>
					</div>
					<Link to="/mikolaj2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/kiermasz_2021/5.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Kiermasz przedświąteczny 28.11.2021r.</h4>
					</div>
					<Link to="/kiermasz2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/andrzejki_2021/31.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Zabawa Andrzejkowa dla dzieci i młodzieży, Mokrzyska 25.11.2021r.</h4>
					</div>
					<Link to="/andrzejki2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/11listopad2021/55.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							W dniu 11 listopada 2021 roku, o godzinie 9.00 modliliśmy się w intencji naszej Ojczyzny
							oraz za śp. Siostrę Katarzynę Przybytniak z okazji 25 rocznicy Jej śmierci.
						</h4>
					</div>
					<Link to="/11Listopad">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/wszystkichSwietych/12.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Cmentarz z lotu ptaka w Mokrzyskach w Uroczystość Wszystkich Świętych.</h4>
					</div>
					<Link to="/wszystkichSwietych">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/cmantarzBudowa2021/47.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Prace Brukarskie na terenie Cmentarza.</h4>
					</div>
					<Link to="/cmentarzBudowa">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/teatr_sw_stanislaw/66.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Sztuka teatralna „Święte Pachole”, Mokrzyska 16.10.2021r.</h4>
					</div>
					<Link to="/cordisSwPachole">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/sluzbaMaryjna/79.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Obrzęd przyjęcia dziewcząt do DZIEWCZĘCEJ SŁUŻBY MARYJNEJ</h4>
					</div>
					<Link to="/powolanieDSM">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/piknik_2021/347.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Piknik Parafialny "PARAFIA Z SERCEM" 5 września 2021r.</h4>
					</div>
					<Link to="/piknikParafialny2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/damianOut/2.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							Msza święta dziękczynna w intencji Pana Damiana Niedojadło za 12-letnią posługę w naszej
							Parafialnej Wspólnocie.
						</h4>
					</div>
					<Link to="/pozegnaniePanaDamiana">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/batalion/2_big.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							10 rocznica nadania 1 Batalionowi Czołgów imienia płk. Józefa Koczwary 08-08-2021 Mokrzyska.
						</h4>
					</div>
					<Link to="/10rocznicaImieniaBatalionu">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/wadowice2021/42.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Pielgrzymowanie do Wadowic, Kalwarii Żebrzydowskiej i Łagiewnik - 2021r.</h4>
					</div>
					<Link to="/wadowice2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/wojakowa2021/81.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Wyjazd Liturgicznej Służby Ołtarza do Żmiącej i Wojakowej</h4>
					</div>
					<Link to="/wojakowa2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/pielgrzymowaniePrzedszkolakow/2.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Pielgrzymowanie przedszkolaków do św. Szczapana w Szczepanowie</h4>
					</div>
					<Link to="/pielgrzymkaPrzedszolakow2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/first_sac_21/1.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>I Komunia Święta - 2021.06.06.</h4>
					</div>
					<Link to="/1KomuniaSw2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div className={styles.image} style={{ backgroundImage: `url(images/church/3.jpg)` }}></div>
					<div className={styles.info}>
						<h4> Nasz Kościół, wnętrze i okolica.</h4>
					</div>
					<Link to="/naszKosciol">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/40_60_years/109.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							Obchody Jubileuszu 40 - lecia istnienia naszej parafii oraz 60 – lecia święceń kapłańskich
							naszego pierwszego Proboszcza ks. Prałata Mariana Wala. 10.06.2021r
						</h4>
					</div>
					<Link to="/40latParafiiMokrzyska">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/bodyOfGod/17.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Boże Ciało - 03 czerwca 2021 rok</h4>
					</div>
					<Link to="/bozeCialo2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/13maj/8small.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Nabożeństwo Fatimskie 13 V 2021 rok</h4>
					</div>
					<Link to="/nabFatimskie2021">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/20_years/15_small.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Święto Patrona Księdza Proboszcza, Św. Stanisława i 20-lecia Jubileuszu Kapłańskiego</h4>
					</div>
					<Link to="/imieniny2021">
						<Button name="zobacz" />
					</Link>
				</div>

				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/confirmation/15_small.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Sakrament Bierzmowania: 07 maja 2021r.</h4>
					</div>
					<Link to="/bierzmowanie2021">
						<Button name="zobacz" />
					</Link>
				</div>

				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/230_years/7_small.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							03.05.2021. Obchody 230 rocznicy uchwalenia Konstytucji 3 maja oraz obchody Strażaków ku
							czci św. Floriana
						</h4>
					</div>
					<Link to="/3maj2021">
						<Button name="zobacz" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
