// import User from "../model/user.model.js";
// import bcryptjs from "bcryptjs";
// // import { errorHandler } from "../utils/Error.js";

// export const authController = async (req, res) => {
//   const { username, email, password } = req.body;

//   if (
//     !username ||
//     !email ||
//     !password ||
//     username === "" ||
//     email === "" ||
//     password === ""
//   ) {
//     return res.status(400).json({ message: "all fields are required" });
//   }

//   const hashPassword = await bcryptjs.hashSync(password, 20);

//   const newUser = new User({
//     username,
//     email,
//     password: hashPassword,
//   });

//   try {
//     await newUser.save();
//     res.send("signup successfull");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/Error.js";

export const authController = async (req, res, next) => {
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
      res.send("signUp successfully");
    } catch (error) {
      next(error);
    }
  }
};
