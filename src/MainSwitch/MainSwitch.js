import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import StartViev from "../templates/StartViev/StartViev";
import Devotions from "../templates/Devotions/Devotions";
import Office from "../templates/Office/Office";
import Informations from "../templates/Informations/Informations";
import Intentions from "../templates/Intentions/Intentions";
import IntentionsOver from "../templates/IntentionsOver/IntentionsOver";
import Calling from "../templates/Calling/Calling";
import Statut from "../templates/CmentaryStatut/Statut";
// import Transmition from "../templates/Transmition/Transmition";
import Council from "../templates/Council/Council";
import Priests from "../templates/Priests/Priests";

import {
  Service1,
  Service_zakonczenie,
  Service_spotkanie,
  Service_bcialo,
  Service_parking,
} from "../templates/Services2022";
import RodoViev from "../templates/RodoViev/RodoViev";
import Temporary from "../templates/Temporary/Temporary";

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
        <Route path="/duszpasterze" component={Priests} />
        {/* <Route path="/transmisja" component={Transmition} /> */}
        <Route path="/rada" component={Council} />
        <Route path="/naszKosciol" component={Service1} />
        <Route path="/majowka-spotkanie-23" component={Service_spotkanie} />
        <Route path="/boze-cialo-23" component={Service_bcialo} />
        <Route path="/zakonczenie_23" component={Service_zakonczenie} />
        <Route path="/cmentarz-23" component={Service_parking} />
        <Route path="/temporary" component={Temporary} />
        <Route path="/rodo" component={RodoViev} />
        <Route component={StartViev} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
export default MainSwitch;
