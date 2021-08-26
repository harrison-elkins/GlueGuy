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
    image: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    THREEp: {
      type: Number,
      trim: true,
    },
    PTS: {
      type: Number,
      trim: true,
    },
    AST: {
      type: Number,

      trim: true,
    },
    TRB: {
      type: Number,

      trim: true,
    },
    STL: {
      type: Number,

      trim: true,
    },
    BLK: {
      type: Number,
      trim: true,
    },
    eFG: {
      type: Number,
      trim: true,
    },
    FGp: {
      type: Number,
      trim: true,
    },
    TSP: {
      type: Number,
      trim: true,
    },
    eORB: {
      type: Number,
      trim: true,
    },
    eDRB: {
      type: Number,
      trim: true,
    },
    eTRB: {
      type: Number,

      trim: true,
    },
    eAST: {
      type: Number,

      trim: true,
    },
    eTOV: {
      type: Number,

      trim: true,
    },
    eUSG: {
      type: Number,

      trim: true,
    },
    TTLS: {
      type: Number,

      trim: true,
    },
    PPR: {
      type: Number,

      trim: true,
    },
    PPS: {
      type: Number,

      trim: true,
    },
    ORtg: {
      type: Number,

      trim: true,
    },
    DRtg: {
      type: Number,
      trim: true,
    },
    PER: {
      type: Number,
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

playerSchema.methods.toJSON = function () {
  const player = this;
  const playerObject = player.toObject();
  return playerObject;
};

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
