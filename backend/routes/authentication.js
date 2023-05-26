const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { tasksManagerConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelper");
const { talkenFunction } = require("../helpers/authenticationHelper");
const { dbConnection } = require("../db");

const router = express.Router();

// router.get("/home", (req, res) => {
//     dbConnection.execute(`SELECT * FROM participants`, (err, result) => {
//       defaultCallback(err, result, res);
//     });
//   });

//registracijos metu iterpiami duomenys i rentele

router.post("/register", (req, res) => {
  const { body } = req;
  const { name, surname, email, password } = body;

  const hashedPassword = bcrypt.hashSync(password, 12);

  dbConnection.execute(
    "INSERT INTO admin (name, surname, email, password) VALUES (?, ?, ?, ?)",
    [name, surname, email, hashedPassword],
    (err, result) => defaultCallback(err, result, res)
  );
});

router.post("/login", (req, res) => {
  const { body } = req;
  const { email, password } = body;

  const incorrectCredentialsResponse = () =>
    res.json({
      message: "Incorrect email or password",
    });

  if (!email || !password) {
    incorrectCredentialsResponse();
    return;
  }

  dbConnection.execute(
    "SELECT * FROM admin WHERE email=?",
    [email],
    (err, result) => {
      if (result.length === 0) {
        incorrectCredentialsResponse();
      } else {
        const user = result[0];
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        const { id, email } = user;



        if (isPasswordCorrect) {
          const token = jwt.sign({ id, email }, process.env.JWT_SECRET);
          res.json({
            message: "Successfully logged in!",
            token,
          });
        } else {
          incorrectCredentialsResponse();
        }
      }
    }
  );
});

router.get("/token/verify", talkenFunction, (req, res) => {
  res.json(res.locals.user);
});

module.exports = router;
