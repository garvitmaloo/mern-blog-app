const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const postRoutes = require("./routes/post");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/post", postRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log("Database connected. Server started!");
    });
  })
  .catch((err) => console.log(err));
