const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const CORS = require("cors");

const visitorHomePageRoutes = require("./routes/visitorHome");
const postRoutes = require("./routes/post");
const categoryRoutes = require("./routes/category");
const newsletterRoutes = require("./routes/newsletter");
const adminRoutes = require("./routes/admin");

dotenv.config();

const app = express();

app.use(
  CORS({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", visitorHomePageRoutes);
app.use("/api/post", postRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/admin", adminRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log("Database connected. Server started!");
    });
  })
  .catch((err) => console.log(err));
