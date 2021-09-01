import { getPlayers, getSinglePlayer } from "../../utils/dataUtils";
import "./PlayerDetails.scss";
import React from "react";
import Radar from "../../components/radar/Radar";
import PERChart from "../../components/PERCharts/PERCharts";
import Chart from "../../components/chart/Chart";
import ShootingChart from "../../components/ShootingChart/ShootingChart";
import { motion } from "framer-motion";
import ScatterPlot from "../../components/ScatterPlot/ScatterPlot";
import ResponsivePieChart from "../../components/ResponisivePie/ResponsivePie";

export default class PlayerDetails extends React.Component {
  state = {
    singlePlayer: null,
    playerData: null,
    radarData: null,
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;
    getSinglePlayer(playerId)
      .then((res) => {
        let playerData = { id: res.data.name };
        playerData[res.data.name] = res.data.PER;
        this.setState({ singlePlayer: res.data, playerData: playerData });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    console.log(this.state.singlePlayer);
    return (
      <section>
        {this.state.singlePlayer && (
          <main className="details-container">
            <section className="dets">
              <article className="dets__basic">
                <h1 className="dets__head">{this.state.singlePlayer?.name}</h1>
                <p className="dets__rank">#{this.state.singlePlayer?.rank}</p>
                <p className="dets__team">{this.state.singlePlayer?.team}</p>
                <div className="dets__image">
                  <img src={this.state.singlePlayer?.image} />
                </div>

                <div className="dets__desc-container">
                  <h3 className="dets__desc">
                    "{this.state.singlePlayer?.desc}" -Kevin O' Connor, The
                    Ringer
                  </h3>
                  <div className="dets__odds">
                    <motion.h4
                      className="dets__odds-current"
                      whileHover={{ scale: 1.75, originX: 0, y: -10 }}
                    >
                      {this.state.singlePlayer?.ROYodds}
                    </motion.h4>
                    <h4 className="dets__odds-head">Odds to win ROY</h4>
                    <p className="dets__odds-book">-DRAFTKINGS, 09/01/21</p>
                  </div>
                </div>
              </article>
              {this.state.playerData && (
                <PERChart data={this.state.playerData} />
              )}
            </section>
            <article className="dets__stats">
              <div className="dets__box">
                <h4 className="dets__box-head">Basic Metrics</h4>
                <motion.div
                  className="dets__box-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.PTS}</strong> PPG
                </motion.div>
                <motion.div
                  className="dets__box-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.FGp} </strong>
                  FG%
                </motion.div>
                <motion.div
                  className="dets__box-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.THREEp}</strong> 3P%
                </motion.div>
                <motion.div
                  className="dets__box-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.TRB}</strong> Rebounds
                </motion.div>
                <motion.div
                  className="dets__box-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.AST}</strong> Assists
                </motion.div>
                <motion.div
                  className="dets__box-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.STL}</strong> Steals
                </motion.div>
                <motion.div
                  className="dets__box-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.BLK}</strong> Blocks
                </motion.div>
              </div>

              <div className="dets__adv">
                <h4 className="dets__box-head">Advanced Metrics</h4>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.TSP}</strong> True Shooting
                  %
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.eFG}</strong> Efficient FG%
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.eORB}</strong> Offensive
                  Rebound %
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.eDRB}</strong> Defensive
                  Rebound %
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.eTRB}</strong> Total Rebound
                  %
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.eAST}</strong> Assist %
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.eTOV}</strong> Avg Turnover
                  Rate
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.eUSG}</strong> Player Usage
                  %
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.TTLS}</strong> Total
                  Shooting
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.PPR}</strong> Pure Point
                  Rating
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.PPS}</strong> Points Per
                  Shot
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.ORtg}</strong> Offensive
                  Rating
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.DRtg}</strong> Defensive
                  Rating
                </motion.div>
                <motion.div
                  className="dets__adv-item"
                  whileHover={{ scale: 2, originX: 0, y: -10 }}
                >
                  <strong>{this.state.singlePlayer?.PER}</strong> Player
                  Effeciency Rating
                </motion.div>
              </div>
              {/* <Chart /> */}
            </article>
          </main>
        )}
        <div className="radar-div">
          {/* <Radar /> */}
          <ResponsivePieChart />
        </div>
        <div className="scatter-div">
          <ScatterPlot />
        </div>
        <div>
          <Chart />
        </div>
      </section>
    );
  }
}
