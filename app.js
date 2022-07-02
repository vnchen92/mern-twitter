const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require("body-parser");
const passport = require('passport');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false })); //want it to respond to json requests from other applications
app.use(bodyParser.json()); //want it to respond to json requests

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));
