const playersModel = require("../db/models/playersModel");

function getAllPlayers(req, res) {
  const players = playersModel.getAllPlayers();
  res.status(200).json(players);
}

modules.export = { getAllPlayers };