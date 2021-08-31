if (process.env.NODE_ENV !== "production") require("dotenv").config();

require("../config");

const Player = require("../models/playersModel"),
  User = require("../models/usersModel"),
  faker = require("faker"),
  mongoose = require("mongoose"),
  players = require("../../data/players");

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await Player.countDocuments({}, function (err, count) {
    console.log("Number of players:", count);
  });
  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });

  //USERS
  let userIdArray = [];
  for (let i = 0; i < 100; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  //PLAYERS
  let savedPlayers = players.map(async (obj) => {
    try {
      const player = await new Player({
        rank: obj.rank,
        name: obj.name,
        desc: obj.desc,
        image: obj.image,
        status: obj.status,
        ROYodds: obj.ROYodds,
        position: obj.position,
        height: obj.height,
        wingspan: obj.wingspan,
        age: obj.age,
        status: obj.status,
        team: obj.team,
        PTS: obj.PTS,
        FGp: obj.FGp,
        THREEp: obj.THREEp,
        AST: obj.AST,
        TRB: obj.TRB,
        STL: obj.STL,
        BLK: obj.BLK,
        TSP: obj.TSP,
        eFG: obj.eFG,
        eORB: obj.eORB,
        eDRB: obj.eDRB,
        eTRB: obj.eTRB,
        eAST: obj.eAST,
        eTOV: obj.eTOV,
        eUSG: obj.eUSG,
        TTLS: obj.TTLS,
        ORtg: obj.ORtg,
        DRtg: obj.DRtg,
        PPR: obj.PPR,
        PPS: obj.PPS,
        PER: obj.PER,
      });
      let savedPlayer = await player.save();
    } catch (e) {
      console.log(e.message);
    }
  });

  await Player.countDocuments({}, function (err, count) {
    console.log("Number of players:", count);
  });
  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });
};

dbReset();
