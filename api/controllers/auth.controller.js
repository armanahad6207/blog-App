import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/Error.js";
import jwt from "jsonwebtoken";

export const Signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "required to fill all fields"));
  } else {
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    try {
      await newUser.save();
      res.send({ message: "signUp succesfull" });
    } catch (error) {
      next(error);
    }
  }
};

export const Signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, "user not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "invalid Password"));
    }

    const token = jwt.sign({ userId: validUser._id }, "arman120");

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access-token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
