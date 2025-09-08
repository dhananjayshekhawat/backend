require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/papa", (req, res) => {
  res.send("me hu papa");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
