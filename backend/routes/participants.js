const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/home", (req, res) => {
  dbConnection.execute(`SELECT * FROM participants`, (err, result) => {
    defaultCallback(err, result, res);
  });
});

router.delete("/home/:id", (req, res) => {
  const { id } = req.params;
  dbConnection.execute(
    `DELETE FROM participants WHERE id = ?`,
    [id],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

router.post("/home", (req, res) => {
  const { name, surname, email, phone } = req.body;

  const postQuery =
    "INSERT INTO participants (name, surname, email, phone) VALUE (?, ?, ?, ?)";

  dbConnection.execute(
    postQuery,
    [name, surname, email, phone],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

module.exports = router;
