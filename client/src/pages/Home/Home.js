import axios from "axios";
import { useState, useEffect } from "react";
import PlayerList from "../../components/PlayerList/PlayerList";
import { getPlayers } from "../../utils/dataUtils";
import "./Home.scss";

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
  }, []);

  console.log(players);

  useEffect(() => {
    async function fetchData() {
      const request = await getPlayers();
      console.log(request);
      setPlayers(request);
      return request;
    }
    fetchData();
  }, []);

  console.log(players);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/players")
      .then((data) => {
        console.log(data);
      })
      .then((data) => {
        setPlayers(data);
      });
  }, []);

  return (
    <div className="home">
      <h1>HOME</h1>
      {players && <h1>{players.name}</h1>}
      {/* {players && <PlayerList players={players} title="All Players" />} */}
      {/* <button onClick={() => setName("Evan Mobley")}> Change Name </button>
      <p>{name}</p> */}
      {/* <PlayerList
        players={players.filter((player) => player.name == "Jalen Green")}
        title="Jalen Green"
       
      /> */}
    </div>
  );
};
export default Home;
