import "./Card.scss";
import graph from "../../assets/graph.png";
import down from "../../assets/down-arrow.png";
import axios from "axios";
import data, { getPlayers } from "../../utils/dataUtils";
import React, { Component } from "react";
import PERChart from "../PERCharts/PERCharts";
import ScatterPlot from "../ScatterPlot/ScatterPlot";

export default class Card extends Component {
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
    // <PERChart />;
    return (
      <>
        <ScatterPlot />
        <main className="container">
          {this.state.playerData.map((player) => {
            return (
              <div className="pcard">
                <div className="pcard__top">
                  <h4 className="pcard__name">{player.name}</h4>
                  <div className="pcard__pick"></div>
                </div>
                <div className="pcard__bottom">
                  <div className="pcard__left-block"></div>
                  <div className="pcard__right-block">
                    <p className="pcard__desc">
                      {player.desc}
                      -Kevin O' Connor, pre-draft
                    </p>
                    <div className="pcard__graph-container">
                      <img className="pcard__graph" src={graph} />
                      <img className="pcard__graph" src={graph} />
                      <img className="pcard__graph" src={graph} />
                      <img className="pcard__graph" src={graph} />
                      <img className="pcard__graph" src={graph} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </>
    );
  }
}
