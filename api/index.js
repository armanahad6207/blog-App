import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

//connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/Mern-Blog")
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("somthing wrong while connectin", err);
  });

const app = express();

app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log("server is running in Port 3000");
});
