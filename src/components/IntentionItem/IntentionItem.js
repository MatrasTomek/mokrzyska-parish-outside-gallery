import React, { useState } from "react";

import Button from "../Buttons/Button";

import styles from "./intentionItem.module.scss";

const IntentionItem = ({ item }) => {
  const { dataFrom, dataTo, intentions, nameOf } = item;

  const [showDetails, setShowDetails] = useState(false);


    const sortedInfo = intentions ? intentions.split(/\n/) : ''

  const vievInformations = sortedInfo.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const showDetailsButton = !showDetails ? (
    <Button name="szczegóły" onClick={handleShowDetails} />
  ) : (
    <Button name="ukryj" onClick={handleShowDetails} />
  );

  const showDetailsInfo = !showDetails ? "" : <ul>{vievInformations}</ul>;
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: `${nameOf ? "block" : "none"}` }}>
          <p>
            Intencje Mszy Świętych poza Parafią: <span>za Śp. {nameOf}</span> od{" "}
            {dataFrom} do {dataTo}
          </p>
        </div>
        <div style={{ display: `${!nameOf ? "block" : "none"}` }}>
          <p>
            Intencje Mszy Świętych:{" "}
            <span>
              od {dataFrom} do {dataTo}
            </span>
          </p>
        </div>
      </div>
      {showDetailsButton}
      {showDetailsInfo}
    </div>
  );
};

export default IntentionItem;
