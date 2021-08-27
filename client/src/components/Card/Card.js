import "./Card.scss";
import graph from "../../assets/graph.png";
import hoops from "../../assets/hoops.png";
import defender from "../../assets/athlete.png";
import iq from "../../assets/artificial-intelligence.png";
import court from "../../assets/basketball.png";
import teamwork from "../../assets/teamwork.png";
import bruiser from "../../assets/strugglecolor.png";
import athlete from "../../assets/athletecolor.png";
import next from "../../assets/right-arrow-1.png";
import { motion } from "framer-motion";
import data, { getPlayers, like } from "../../utils/dataUtils";
import React, { Component } from "react";
import PERChart from "../PERCharts/PERCharts";
import ScatterPlot from "../ScatterPlot/ScatterPlot";
import Chart from "../chart/Chart";
import axios from "axios";
const emoji = require("node-emoji");

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

  upVote = (id) => {
    axios.patch(`/api/players/${id}`);
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
              <>
                <motion.div
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.3 }}
                  className="pcard"
                  onClick={() => this.handleClick(player._id)}
                >
                  <motion.div className="pcard__top">
                    <div className="pcard__name-wrap">
                      <h4 className="pcard__name">{player.name}</h4>
                      <p className="pcard__team">{player.team}</p>
                    </div>

                    <div className="pcard__pick">
                      <motion.img
                        className="pcard__pick-image"
                        src={next}
                        whileHover={{
                          scale: 1.025,
                          x: [
                            -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                            5, -5, 5,
                          ],
                          yoyo: Infinity,
                          transition: {
                            duration: 2,
                          },
                        }}
                      />
                    </div>
                  </motion.div>
                  <div className="pcard__bottom">
                    <div className="pcard__left-block">
                      <img className="pcard__image" src={player.image} />
                    </div>
                    <article className="pcard__right-block">
                      {/* <p className="pcard__desc">
                      {player.desc}
                      -Kevin O' Connor, pre-draft
                    </p> */}
                      <div className="pcard__boxscore">
                        {/* <h3>PICK: {player.rank}</h3> */}
                        <h3 className="pcard__item">PPG: {player.PTS}</h3>
                        <h3 className="pcard__item">TRB: {player.TRB}</h3>
                        <h3 className="pcard__item">3P%: {player.THREEp}</h3>
                        <h3 className="pcard__item">AST: {player.AST}</h3>
                        <h3 className="pcard__item">PER: {player.PER}</h3>
                      </div>
                      <div className="next">{player.rank}</div>
                      <div className="pcard__graph-container">
                        <img className="pcard__icon" src={hoops} />
                        <img className="pcard__icon" src={athlete} />
                        <img className="pcard__icon" src={bruiser} />
                        <img className="pcard__icon" src={teamwork} />
                        <img className="pcard__icon" src={iq} />
                      </div>
                    </article>
                  </div>
                </motion.div>
              </>
            );
          })}
        </main>
      </>
    );
  }
}
