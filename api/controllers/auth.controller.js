import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const authController = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: " All fields are required" });
  }

  const hashPassword = bcryptjs.hashSync(password, 20);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.send("signup successfull");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};