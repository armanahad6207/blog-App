import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

//connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/Mern-Blog")
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("somthing wrong while connecting", err);
  });

const app = express();

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log("server is running in Port 3000");
});
