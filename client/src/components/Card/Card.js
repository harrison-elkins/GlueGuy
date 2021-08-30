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
import ShootingChart from "../../components/ShootingChart/ShootingChart";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
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
        <ShootingChart />
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
                      <img src={player.status} />
                      <div className="pcard__team-container">
                        <p className="pcard__team">{player.team}</p>
                        <p className="pcard__position">{player.position}</p>
                      </div>
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
                      <div className="pcard__bio">
                        <div className="pcard__measurables">
                          <p className="pcard__height">
                            <strong>HEIGHT</strong> {player.height}
                          </p>
                          <p className="pcard__wingspan">
                            <strong>WINGSPAN </strong>
                            {player.wingspan}
                          </p>
                        </div>
                        <div className="pcard__age-container">
                          <p className="pcard__age">
                            <strong>AGE</strong> {player.age}
                          </p>
                          {/* <p className="pcard__position">
                            POSITION:{player.position}
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <article className="pcard__right-block">
                      {/* <p className="pcard__desc">
                      {player.desc}
                      -Kevin O' Connor, pre-draft
                    </p> */}
                      <div className="pcard__boxscore">
                        {/* <h3>PICK: {player.rank}</h3> */}
                        <motion.h3
                          className="pcard__item"
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        >
                          PPG: {player.PTS}
                        </motion.h3>
                        <motion.h3
                          className="pcard__item"
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        >
                          TRB: {player.TRB}
                        </motion.h3>
                        <motion.h3
                          className="pcard__item"
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        >
                          3P%: {player.THREEp}
                        </motion.h3>
                        <motion.h3
                          className="pcard__item"
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        >
                          AST: {player.AST}
                        </motion.h3>
                        <motion.h3
                          className="pcard__item"
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        >
                          PER: {player.PER}
                        </motion.h3>
                      </div>
                      <motion.div
                        className="next"
                        whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                      >
                        {player.rank}
                      </motion.div>
                      <div className="pcard__graph-container">
                        <motion.img
                          className="pcard__icon"
                          src={hoops}
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        />
                        <motion.img
                          className="pcard__icon"
                          src={athlete}
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        />
                        <motion.img
                          className="pcard__icon"
                          src={bruiser}
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        />
                        <motion.img
                          className="pcard__icon"
                          src={teamwork}
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        />
                        <motion.img
                          className="pcard__icon"
                          src={iq}
                          whileHover={{ scale: 1.3, originX: 0, x: -20 }}
                        />
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
