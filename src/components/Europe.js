import React from "react";

import "./Europe.css";

import { ReactComponent as EuropeMap } from "./Europe.svg";

function Europe() {
  const styles = {};

  return (
    <div>
      <EuropeMap className="map" />
    </div>
  );
}

export default Europe;
