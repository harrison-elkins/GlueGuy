const router = require("express").Router();
const players = require("../data/players");
const Player = require("../models/playersModel");

router.get("/", async (req, res) => {
  try {
    const dbPlayers = await Player.find();
    res.json(dbPlayers);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
