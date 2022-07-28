import User from "../models/User";
import bcrypt from "bcrypt";

// signUp
export const postSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({
      name,
      email,
      password,
    });

    // password 암호화
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).send("Create Success");
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
};

// login
export const postLogin = (req, res) => res.redirect("/");

// Profile
export const getProfile = (req, res) => {
  const { id } = req.params;
  const user = users.filter((data) => data.id == id);
  res.json({ ok: false, user: user });
};
