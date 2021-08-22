import ResponsiveScatterPlot from "../ScatterPlot/ScatterPlot";
import axios from "axios";
import "./Home.scss";
import React, { Component } from "react";
import { getPlayers } from "../../utils/dataUtils";
import Chart from "../chart/Chart";
import Radar from "../radar/Radar";
import ScatterPlot from "../ScatterPlot/ScatterPlot.js";
import Card from "../Card/Card";

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
      <main className="home-wrapper">
        {/* <ScatterPlot /> */}
        {/* <Chart /> */}
        {/* <Radar /> */}
        <section className="player">
          {this.state.playerData.map((player) => {
            return (
              <div className="card">
                <div className="card__top">
                  <h4 className="card__name">{player.name}</h4>
                  <p className="card__desc">
                    {player.desc}
                    <br />
                    -Kevin O' Connor, pre-draft
                  </p>
                </div>
                <div className="card__bottom">
                  <div className="card__left-block"></div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}
