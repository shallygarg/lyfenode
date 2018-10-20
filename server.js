const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const health = require("./routes/api/health");

const app = express();

//Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/health", health);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
