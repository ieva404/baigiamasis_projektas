require("dotenv").config();
const express = require("express");
const cors = require("cors");

const participantsRouter = require("./routes/participants")

const app = express();

app.use(cors());
app.use(express.json());
app.use(participantsRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
