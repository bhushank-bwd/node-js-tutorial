const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Welcome to Hello routes");
});
app.use("/test", (req, res) => {
  res.send("Welcome to test route");
});
app.use("/", (req, res) => {
  res.send("Welcome to Dev Tinders");
});
app.listen(5000, () => {
  console.log("dev tinders backend running on http://localhost:5000/");
});
