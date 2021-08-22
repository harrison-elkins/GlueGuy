const router = require("express").Router();
const players = require("../data/players");
const Player = require("../db/models/playersModel");

router.get("/", async (req, res) => {
  try {
    const dbPlayers = await Player.find();
    res.json(dbPlayers);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  Player.findById(req.params.id)
    .then((found) => {
      if (!found) {
        return res.status(404).end();
      }
      return res.status(200).json(found);
    })
    .catch((e) => e);
});

module.exports = router;
