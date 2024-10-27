const express = require("express");

const app = express();
app.use("/admin", (err, req, res, next) => {
  // check admin condition
  if (err) {
    res.status(500).send(err);
  }
  console.log("admin middleware");
  next();
  // else
  // res.send("no admin");
});

app.post("/admin/add", (req, res, next) => {
  throw new Error("error in admin post add");
  res.send("add done");
});
app.get("/admin/id", (req, res, next) => {
  try {
    console.log("admin get id");
    throw new Error("error in admin get id");
    res.send("get done");
  } catch (err) {
    console.log(err);
    res.status(500).send("error in admin get id catch");
  }
});
app.listen(5000, () => {
  console.log("dev tinders backend running on http://localhost:5000/");
});
