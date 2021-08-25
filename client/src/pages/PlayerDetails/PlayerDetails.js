import { getPlayers, getSinglePlayer } from "../../utils/dataUtils";
import "./PlayerDetails.scss";
import React from "react";
import Radar from "../../components/radar/Radar";
import PERChart from "../../components/PERCharts/PERCharts";
import Chart from "../../components/chart/Chart";
import { motion } from "framer-motion";
import ScatterPlot from "../../components/ScatterPlot/ScatterPlot";

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

  render() {
    console.log(this.state.singlePlayer);
    return (
      <>
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
                </div>
              </article>
              {this.state.playerData && (
                <PERChart data={this.state.playerData} />
              )}
            </section>
            <article className="dets__stats">
              <div className="dets__box">
                <h4 className="dets__box-head">Basic Metrics</h4>
                <div className="dets__box-item">
                  <strong>{this.state.singlePlayer?.PTS}</strong> PPG
                </div>
                <div className="dets__box-item">
                  <strong>{this.state.singlePlayer?.FGp} </strong>
                  FG%
                </div>
                <div className="dets__box-item">
                  <strong>{this.state.singlePlayer?.THREEp}</strong> 3P%
                </div>
                <strong>
                  <div className="dets__box-item">
                    {this.state.singlePlayer?.TRB}
                  </div>
                </strong>{" "}
                Rebounds
                <strong>
                  <div className="dets__box-item">
                    {this.state.singlePlayer?.STL}
                  </div>
                </strong>{" "}
                Steals
                <strong>
                  <div className="dets__box-item">
                    {this.state.singlePlayer?.BLK}
                  </div>
                </strong>{" "}
                Blocks
              </div>

              <div className="dets__adv">
                <h4 className="dets__box-head">Advanced Metrics</h4>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.TSP}</strong> True Shooting
                  %
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.eFG}</strong> Efficient FG%
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.eORB}</strong> Offensive
                  Rebound %
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.eDRB}</strong> Defensive
                  Rebound %
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.eTRB}</strong> Total Rebound
                  %
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.eAST}</strong> Assist %
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.eTOV}</strong> Avg Turnover
                  Rate
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.eUSG}</strong> Player Usage
                  %
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.TTLS}</strong> Total
                  Shooting
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.PPR}</strong> Pure Point
                  Rating
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.PPS}</strong> Points Per
                  Shot
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.ORtg}</strong> Offensive
                  Rating
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.DRtg}</strong> Defensive
                  Rating
                </div>
                <div className="dets__adv-item">
                  <strong>{this.state.singlePlayer?.PER}</strong> Player
                  Effeciency Rating
                </div>
              </div>
              <Chart />
            </article>
            {/* {this.state.playerData && <Radar data={this.state.radarData} />} */}
          </main>
        )}
      </>
    );
  }
}
