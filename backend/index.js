const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/soccerRoutes");


const app = express();
const PORT = 4001;

// mongo connection
mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost/soccerDB", {
mongoose.connect("mongodb://admin:rajeshwar12@ds141428.mlab.com:41428/ninjapoc", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//CORS Setup
app.use(cors());

routes(app);

app.get("/", (req, res) =>
  res.send(`Our Soccer application is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your soccer server is running on port ${PORT}`)
);
