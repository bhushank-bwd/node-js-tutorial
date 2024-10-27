const express = require("express");
const connectDB = require("./config/database");
const User = require("./model/user");

const app = express();

app.post("/sign-up", async (req, res) => {
  const userObject = new User({
    firstName: "fnm",
    lastName: "lnm",
    emailId: "fnm@lnm.com",
    password: "Fmn@123",
  }); // create new instance of USer model

  try {
    await userObject.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(5000, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
