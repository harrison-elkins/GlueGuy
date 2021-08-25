import { getPlayers, getSinglePlayer } from "../../utils/dataUtils";
import React from "react";
import axios from "axios";
import PERChart from "../../components/PERCharts/PERCharts";

export default class PlayerDetails extends React.Component {
  state = {
    singlePlayer: null,
    playerData: null,
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
          <div>
            <h1>{this.state.singlePlayer?.name}</h1>
            <p>{this.state.singlePlayer?.rank}</p>
            <p>{this.state.singlePlayer?.desc}</p>
            <p>{this.state.singlePlayer?.team}</p>
            <p>{this.state.singlePlayer?.PTS}</p>
            <p>{this.state.singlePlayer?.FGp}</p>
            <p>{this.state.singlePlayer?.THREEp}</p>
            <p>{this.state.singlePlayer?.TRB}</p>
            <p>{this.state.singlePlayer?.STL}</p>
            <p>{this.state.singlePlayer?.BLK}</p>
            <p>{this.state.singlePlayer?.TSP}</p>
            <p>{this.state.singlePlayer?.eFG}</p>
            <p>{this.state.singlePlayer?.eORB}</p>
            <p>{this.state.singlePlayer?.eDRB}</p>
            <p>{this.state.singlePlayer?.eTRB}</p>
            <p>{this.state.singlePlayer?.eAST}</p>
            <p>{this.state.singlePlayer?.eTOV}</p>
            <p>{this.state.singlePlayer?.eUSG}</p>
            <p>{this.state.singlePlayer?.TTLS}</p>
            <p>{this.state.singlePlayer?.PPR}</p>
            <p>{this.state.singlePlayer?.PPS}</p>
            <p>{this.state.singlePlayer?.ORtg}</p>
            <p>{this.state.singlePlayer?.DRtg}</p>
            <p>{this.state.singlePlayer?.PER}</p>
            {this.state.playerData && <PERChart data={this.state.playerData} />}
          </div>
        )}
      </>
    );
  }
}
