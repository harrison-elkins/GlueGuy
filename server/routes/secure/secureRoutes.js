const router = require("express").Router();
const { Router } = require("express");
const Player = require("../../db/models/playersModel");
const User = require("../../db/models/usersModel");

//Get Current User
router.get("/current", async (req, res) => {
  console.log(req.decoded);
  try {
    const user = await User.findOne({ _id: req.decoded._id });

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//GET all users
router.get("/all/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;
