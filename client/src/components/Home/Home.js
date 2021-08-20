import ResponsiveScatterPlot from "../ScatterPlot/ScatterPlot";
import axios from "axios";
import "./Home.scss";
import React, { Component } from "react";
import { getPlayers } from "../../utils/dataUtils";

export default class Home extends Component {
  state = {
    playerData: [],
  };

  componentDidMount() {
    getPlayers()
      .then((res) => {
        console.log(res.data);
        this.setState({ playerData: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        <ResponsiveScatterPlot />
        {this.state.playerData.map((player) => {
          return <h1>{player.name}</h1>;
        })}
      </>
    );
  }
}
