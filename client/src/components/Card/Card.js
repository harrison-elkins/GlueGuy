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
    allPlayers: [],
  };

  componentDidMount() {
    getPlayers()
      .then((res) => {
        console.log(res.data);
        this.setState({ allPlayers: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleClick = (id) => {
    this.props.history.push(`/playerdetails/${id}`);
    console.log(id);
  };
  render() {
    return (
      <>
        <article className="chart-contain">{/* <PERChart /> */}</article>
        <ScatterPlot />
        <main className="container">
          {this.state.allPlayers.map((player) => {
            let playerData = { id: player.name };
            playerData[player.name] = player.PER;
            return (
              <div
                className="pcard"
                onClick={() => this.handleClick(player._id)}
              >
                <div className="pcard__top">
                  <div className="pcard__name-wrap">
                    <h4 className="pcard__name">{player.name}</h4>
                    <p className="pcard__team">{player.team}</p>
                  </div>
                  <div className="pcard__pick">{player.rank}</div>
                </div>
                <div className="pcard__bottom">
                  <div className="pcard__left-block">
                    <img className="pcard__image" src={player.image} />
                  </div>
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
                {/* <PERChart data={playerData} /> */}
              </div>
            );
          })}
        </main>
      </>
    );
  }
}
