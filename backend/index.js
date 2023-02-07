const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const visitorHomePageRoutes = require("./routes/visitorHome");
const postRoutes = require("./routes/post");
const categoryRoutes = require("./routes/category");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/", visitorHomePageRoutes);
app.use("/api/post", postRoutes);
app.use("/api/category", categoryRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log("Database connected. Server started!");
    });
  })
  .catch((err) => console.log(err));
