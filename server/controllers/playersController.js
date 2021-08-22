const playersModel = require("../db/models/playersModel");

function getAllPlayers(req, res) {
  const players = playersModel.getAllPlayers();
  res.status(200).json(players);
}

function getSinglePlayer(req, res) {
  const playerDetails = playersModel.getSinglePlayer();
  const singlePlayer = playerDetails.find(
    (player) => player.id === req.params.id
  );
  res.status(200).json(singlePlayer);
}

modules.export = { getAllPlayers, getSinglePlayer };
