import "./Card.scss";
import hoops from "../../assets/hoops.png";
import iq from "../../assets/artificial-intelligence.png";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CustomizedTooltip from "../Tooltip/Tooltip";
import court from "../../assets/basketball.png";
import teamwork from "../../assets/teamwork.png";
import bruiser from "../../assets/strugglecolor.png";
import athlete from "../../assets/athletecolor.png";
import next from "../../assets/right-arrow-1.png";
import { motion } from "framer-motion";
import data, { getPlayers, like } from "../../utils/dataUtils";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import ShootingChart from "../../components/ShootingChart/ShootingChart";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import TransitionsModal from "../Modal/Modal";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
const emoji = require("node-emoji");

export default class Card extends Component {
  state = {
    allPlayers: [],
  };

  Tooltip = withStyles((theme) => ({
    arrow: {
      color: "#242423",
    },
    tooltip: {
      backgroundColor: "#242423",
      arrow: "#242423",
      color: "#fff",
      padding: 10,
      width: 200,
      height: 160,
      fontSize: theme.typography.pxToRem(16),
      border: "1px solid #dadde9",
      justifyContent: "center",
      alignItems: "center",
    },
  }))(Tooltip);

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
        <Hero />
        <main className="container">
          {this.state.allPlayers.map((player) => {
            let playerData = { id: player.name };
            playerData[player.name] = player.PER;
            return (
              <>
                <motion.div
                  id="players"
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.3 }}
                  className="pcard"
                >
                  <motion.div className="pcard__top">
                    <div className="pcard__name-wrap">
                      <div className="pcard__icon-wrap">
                        <h4 className="pcard__name">{player.name}</h4>

                        <motion.img
                          className="pcard__status"
                          src={player.status}
                          whileHover={{ scale: 1.5 }}
                        />
                      </div>
                      <div className="pcard__team-container">
                        <p className="pcard__team">{player.team}</p>

                        <p className="pcard__position">{player.position}</p>
                      </div>
                    </div>

                    <div className="pcard__pick">
                      <motion.img
                        className="pcard__pick-image"
                        src={next}
                        onClick={() => this.handleClick(player._id)}
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
                    <this.Tooltip
                      arrow
                      interactive
                      placement="left"
                      PopperProps={{
                        modifiers: {
                          offset: {
                            enabled: true,
                            offset: "0px 60px",
                          },
                        },
                      }}
                      title={player.attributes}
                    >
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
                          </div>
                        </div>
                      </div>
                    </this.Tooltip>
                    <article className="pcard__right-block">
                      <div className="pcard__boxscore">
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
