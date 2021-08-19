// const fs = require("fs");

// const getPlayers = () => JSON.parse(fs.readFileSync("./data/players.js"));
// const setPlayers = (players) =>
//   fs.writeFileSync("./data/players.json", JSON.stringify(players));

// module.exports = { getPlayers, setPlayers };

const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    rank: {
      type: Number,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    team: {
      type: String,
      required: true,
      trim: true,
    },
    points: {
      type: Number,
      required: true,
      trim: true,
    },
    assists: {
      type: Number,
      required: true,
      trim: true,
    },
    boards: {
      type: Number,
      required: true,
      trim: true,
    },
    steals: {
      type: Number,
      required: true,
      trim: true,
    },
    blocks: {
      type: Number,
      required: true,
      trim: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Format the date sent back by mongo
playerSchema.methods.toJSON = function () {
  const player = this;
  const playerObject = player.toObject();

  return playerObject;
};

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
