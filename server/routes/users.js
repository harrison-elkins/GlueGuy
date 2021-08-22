const router = require("express").Router();
const { createUser, loginUser } = require("../controllers/usersController");

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
    });
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

module.exports = router;
