const express = require("express");

const app = express();

/* app.use("/hello", (req, res) => {
  res.send("Welcome to Hello routes");
});
app.use("/test", (req, res) => {
  res.send("Welcome to test route");
});
app.use("/", (req, res) => {
  res.send("Welcome to Dev Tinders");
});*/
/* app.get("/ab?c", (req, res) => {
  res.json({ message: "ab?c is optional b text" });
});
app.get("/a(bc)?d", (req, res) => {
  res.json({ message: "a(bc)?d is optional bc route" });
});
app.get("/ab+c", (req, res) => {
  res.json({ message: "ab+c is multiple b text" });
});
app.get("/a(bc)+d", (req, res) => {
  res.json({ message: "a(bc)+d is multiple bc text" });
}); 

app.get("/ab*cd", (req, res) => {
  res.json({ message: "ab*cd is any between ab and cd will work" });
});*/

app.get("/home", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});
app.get("/list/:id/:name", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});
app.listen(5000, () => {
  console.log("dev tinders backend running on http://localhost:5000/");
});
