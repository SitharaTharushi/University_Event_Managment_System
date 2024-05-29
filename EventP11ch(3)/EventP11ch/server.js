 const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs"); //  EJS
const authRouter = require("./routes/authRoutes.js");
const eventRouter = require("./routes/eventRoutes.js");

const path = require("path");
const mime = require("mime");

const port = 3000;

app.use(express.static("public")); // CSS files are in 'public' directory

app.use("/auth", authRouter);
app.use("/event", eventRouter);

app.set("view engine", "ejs"); // Set EJS template engine

app.use(express.static("public")); // CSS files are in 'public' directory

app.use(bodyParser.urlencoded({ extended: true }));

// mongodb+srv://eventsrajarata:Mihintale555@cluster0.4d6ieaz.mongodb.net/eventsDB

mongoose.connect(
  "mongodb+srv://eventsrajarata:Mihintale555@cluster0.4d6ieaz.mongodb.net/eventsDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/form.html");
});

// Start the server
// Establish the Port
app.listen(8085, function check(error) {
  if (error) {
    console.log(err + "Error....!!!!");
  } else {
    console.log("Server is running on port 8085..!");
  }
});
