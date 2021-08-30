import axios from "axios";
import { useState, useEffect } from "react";
import PlayerList from "../../components/PlayerList/PlayerList";
import { getPlayers } from "../../utils/dataUtils";
import { motion } from "framer-motion";
import "./ResponsiveCards.scss";

const Home = () => {
  const [players, setPlayers] = useState(null);
  const [loading, setLoading] = useState(true);

  //   const handleDelete = (rank) => {
  //     const newPlayers = players.filter((player) => player.rank !== rank);
  //     setPlayers(newPlayers);
  //   };
  useEffect(async () => {
    const res = await getPlayers();
    console.log(res.data);
    setPlayers(res.data);
    return players;
  }, []);

  console.log(players);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const request = await getPlayers();
  //       console.log(request);
  //       setPlayers(request);
  //       return request;
  //     }
  //     fetchData();
  //   }, []);

  //   console.log(players);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8080/api/players")
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .then((data) => {
  //         setPlayers(data);
  //       });
  //   }, []);

  return (
    <main className="container">
      {players.map((player) => {
        let playerData = { id: player.name };
        playerData[player.name] = player.PER;
        return (
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
              <div className="pcard__pick">{player.rank}</div>
            </motion.div>
            <div className="pcard__bottom">
              <div className="pcard__left-block">
                <img className="pcard__image" src={player.image} />
              </div>
              <div className="pcard__right-block">
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
                <div className="pcard__graph-container">
                  {/* <img className="pcard__graph" src={hoops} />
                  <img className="pcard__graph" src={athlete} />
                  <img className="pcard__graph" src={bruiser} />
                  <img className="pcard__graph" src={teamwork} />
                  <img className="pcard__graph" src={iq} /> */}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </main>
  );
};
export default Home;
