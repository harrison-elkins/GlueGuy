const router = require("express").Router();
const { Router } = require("express");
const Player = require("../../db/models/playersModel");

router.patch("/players/upvote/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const upvotedPlayer = await Player.findByIdAndUpdate(req.params.id, {
      $inc: { upvotes: 1 },
    });
    console.log(upvotedPlayer);
    res.json(upvotedPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
