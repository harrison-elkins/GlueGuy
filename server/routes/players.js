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
  try {
    const id = await Player.findById(req.params.id);
    res.json(id);
  } catch (e) {
    res.status(500).json({ message: e.messsage });
  }
});

router.patch("/players/upvote/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const upvotedPlayer = await Player.findByIdAndUpdate(req.params.id, {
      $inc: { upvotes: 1 },
    });
    console.log(upvotedPlayer);
    res.json(upvotedPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
