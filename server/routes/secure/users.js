const router = require("express").Router(),
const User = require("../../db/models/usersModel");

  router.get("/current", async (req, res) => {
    console.log(req.decoded);
    try {
      const user = await User.findOne({ _id: req.decoded._id });
  
      res.json(user);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

  router.get("/all/users", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      res.status(500).json({ error: e.toString() });
    }
  });

module.exports = router;
