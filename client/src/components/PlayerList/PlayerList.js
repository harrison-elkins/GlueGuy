import "./PlayerList.scss";
const PlayerList = ({ players, title }) => {
  return (
    <div className="player-list">
      <h1>{title}</h1>

      {players.map((player) => (
        <div className="player-list__card" key={player._id}>
          <h2>{player.name}</h2>
          <h3>Pick # {player.rank}</h3>
          <p>{player.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
