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

    const token = jwt.sign({ userId: validUser._id }, "arman@123");

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access-token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

//googl auth
export const Google = async (req, res, next) => {
  const { email, name, photoUrl } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      const token = jwt.sign({ id: user._id }, "arman@123");
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random.toString(36).slice(-8);

      const hashPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashPassword,
        profilePicture: photoUrl,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, "arman@123");
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
