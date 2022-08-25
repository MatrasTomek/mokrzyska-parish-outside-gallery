import React from "react";
import { Switch, Route } from "react-router-dom";

import StartViev from "../templates/StartViev/StartViev";
import Devotions from "../templates/Devotions/Devotions";
import Office from "../templates/Office/Office";
import Informations from "../templates/Informations/Informations";
import Intentions from "../templates/Intentions/Intentions";
import IntentionsOver from "../templates/IntentionsOver/IntentionsOver";
import Calling from "../templates/Calling/Calling";
import Statut from "../templates/CmentaryStatut/Statut";
import Transmition from "../templates/Transmition/Transmition";
import Gallery from "../templates/Gallery/Gallery";
import {
	Service1,
	Service2,
	Service3,
	Service4,
	Service5,
	Service6,
	Service7,
	Service8,
	Service9,
	Service10,
	Service11,
	Service12,
	Service13,
	Service14,
	Service15,
	Service16,
	Service17,
	Service18,
	Service19,
	Service20,
	Service21,
	Service22,
	Service23,
	Service24,
	Service25,
	Service26,
	Service28,
} from "../templates/Services2021";
import {
	Service1_22,
	Service2_22,
	Service3_22,
	Service4_22,
	Service5_22,
	Service6_22,
	Service7_22,
	Service8_22,
	Service9_22,
	Service10_22,
	Service11_22,
	Service12_22,
	Service13_22,
	Service14_22,
	Service15_22,
	Service16_22,
	Service17_22,
	Service18_22,
	Service19_22,
} from "../templates/Services2022";
import RodoViev from "../templates/RodoViev/RodoViev";
// import Temporary from "../templates/Temporary/Temporary";

function MainSwitch() {
	return (
		<>
			<Switch>
				<Route path="/" exact={true} component={StartViev} />
				<Route path="/nabozenstwa" component={Devotions} />
				<Route path="/kancelaria" component={Office} />
				<Route path="/ogloszenia" component={Informations} />
				<Route path="/intencje" component={Intentions} />
				<Route path="/intencje-poza-parafia" component={IntentionsOver} />
				<Route path="/regulamin" component={Statut} />
				<Route path="/powolania" component={Calling} />
				<Route path="/transmisja" component={Transmition} />
				<Route path="/galeria" component={Gallery} />
				<Route path="/3maj2021" component={Service1} />
				<Route path="/bierzmowanie2021" component={Service2} />
				<Route path="/imieniny2021" component={Service3} />
				<Route path="/nabFatimskie2021" component={Service4} />
				<Route path="/naborOrganistow2021" component={Service5} />
				<Route path="/bozeCialo2021" component={Service6} />
				<Route path="/40latParafiiMokrzyska" component={Service7} />
				<Route path="/naszKosciol" component={Service8} />
				<Route path="/1KomuniaSw2021" component={Service9} />
				<Route path="/pielgrzymkaPrzedszolakow2021" component={Service10} />
				<Route path="/wojakowa2021" component={Service11} />
				<Route path="/wadowice2021" component={Service12} />
				<Route path="/10rocznicaImieniaBatalionu" component={Service13} />
				<Route path="/pozegnaniePanaDamiana" component={Service14} />
				<Route path="/piknikParafialny2021" component={Service15} />
				<Route path="/powolanieDSM" component={Service16} />
				<Route path="/cordisSwPachole" component={Service17} />
				<Route path="/cmentarzBudowa" component={Service18} />
				<Route path="/wszystkichSwietych" component={Service19} />
				<Route path="/11Listopad" component={Service20} />
				<Route path="/andrzejki2021" component={Service21} />
				<Route path="/kiermasz2021" component={Service22} />
				<Route path="/mikolaj2021" component={Service23} />
				<Route path="/medal2021" component={Service24} />
				<Route path="/swiatlo2021" component={Service25} />
				<Route path="/bozenarodzenie2021" component={Service26} />
				<Route path="/historiaParafii" component={Service28} />
				<Route path="/koledowanie2022" component={Service1_22} />
				<Route path="/paczka" component={Service2_22} />
				<Route path="/uchodzcy" component={Service3_22} />
				<Route path="/aspiranci2022" component={Service4_22} />
				<Route path="/n-palmowa2022" component={Service5_22} />
				<Route path="/rekolekcje-2022" component={Service6_22} />
				<Route path="/wielk-przedszk-2022" component={Service7_22} />
				<Route path="/w-czwr-2022" component={Service8_22} />
				<Route path="/w-pia-2022" component={Service9_22} />
				<Route path="/w-sob-2022" component={Service10_22} />
				<Route path="/w-nie-2022" component={Service11_22} />
				<Route path="/s-Florian-2022" component={Service12_22} />
				<Route path="/majowka-2022" component={Service13_22} />
				<Route path="/majowka-zakonczenie-2022" component={Service14_22} />
				<Route path="/70-lat-szkoly" component={Service15_22} />
				<Route path="/boze-cialo-2022" component={Service16_22} />
				<Route path="/odpust-2022" component={Service17_22} />
				<Route path="/sandomierz-2022" component={Service18_22} />
				<Route path="/bud-przedsz-2022" component={Service19_22} />
				{/* <Route path="/temporary" component={Temporary} /> */}
				<Route path="/rodo" component={RodoViev} />

				{/* <Route component={ErrorPage} /> */}
			</Switch>
		</>
	);
}
export default MainSwitch;
