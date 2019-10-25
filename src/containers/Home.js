import React, { Component } from "react";
import "./Home.css";

import SelectStage from "./SelectStage";
import Europe from "../components/Europe";

export default class Home extends Component {
  render() {
    const countries = ["Europe", "Africa", "North America"];

    return (
      <div className="Home">
        <div className="lander">
          <h1>GeoQuiz</h1>
          <p>Select a Continent!</p>
          <div className="continents">
            <SelectStage title="Europe" />
            <SelectStage title="Africa" />
            <SelectStage title="North America" />
            <SelectStage title="Asia" />
            <SelectStage title="Oceana" />
            <SelectStage title="South America" />
          </div>
        </div>
      </div>
    );
  }
}
