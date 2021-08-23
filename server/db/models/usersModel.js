const mongoose = require("mongoose"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * // By naming this instance method toJSON we don't
 * // need to call it for it to run because of our
 * // express res.send or res.json methods calls it for us.
 *
 */
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};
/**
 * // This instance method will generate a user token
 * // and append it to the user.tokens array in the DB
 *
 */

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  await user.save();
  return token;
};

/**
 * // This static method will first find a user by email
 * // and then compare that users password with the
 * // submitted password.
 * // Static methods are run on the actual Model (User), instead
 * // of an instance of a model.
 * @return { user }
 */
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Unable to log in.");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Unable to login.");
  return user;
};

/**
 * // This mongoose middleware will hash our user's passwords
 * // whenever a user is created or a user password is updated.
 * // it doesn't return anything, but calls next instead.  This next
 * // serves the same purpose as the next we have been calling in
 * // express, but it is not the same next.  This one is provided
 * // by mongoose, and the other by express.
 */
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password"))
    user.password = await bcrypt.hash(user.password, 8);

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
