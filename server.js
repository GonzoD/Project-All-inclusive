const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { db } = require('./config/dataBase')
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("HI");
});

async function start() {
    try {
      db.authenticate()
        .then(() => console.log("Database conected..."))
        .catch((err) => console.log("Err: " + err));
      app.listen(PORT, () => {
        console.log("Server has been started...");
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  start();