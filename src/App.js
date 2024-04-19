import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StoreProvider from "../src/Store/StoreProvider";

import Navigation from "./templates/Navigation/Navigation.js";
import MainSwitch from "./MainSwitch/MainSwitch";
import Footer from "./templates/Footer/Footer.js";
// import BoxInformation from "./components/BoxInformation/BoxInformation";
import Arrow from "./components/Arrow/Arrow";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navigation />
        <Fragment>
          <MainSwitch />
        </Fragment>
        <Footer />
        {/* <BoxInformation /> */}
      </Router>
      <Arrow />
    </StoreProvider>
  );
}

export default App;
