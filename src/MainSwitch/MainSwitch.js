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
import Council from "../templates/Council/Council";

import {
	Service1,
	Service21_22,
	Service17_22,
	Service18_22,
	Service19_22,
	Service20_22,
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
				<Route path="/rada" component={Council} />
				<Route path="/naszKosciol" component={Service1} />
				<Route path="/fatima-2022" component={Service21_22} />
				<Route path="/koncert-2022" component={Service17_22} />
				<Route path="/sandomierz-2022" component={Service18_22} />
				<Route path="/bud-przedsz-2022" component={Service19_22} />
				<Route path="/piknikParafialny2022" component={Service20_22} />
				{/* <Route path="/temporary" component={Temporary} /> */}
				<Route path="/rodo" component={RodoViev} />

				{/* <Route component={ErrorPage} /> */}
			</Switch>
		</>
	);
}
export default MainSwitch;
