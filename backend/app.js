require("dotenv").config();
const express = require("express");
const cors = require("cors");

const participantsRouter = require("./routes/participants");
const registerRouter = require("./routes/authentication");
const loginRouter = require("./routes/authentication");

const app = express();

app.use(cors());
app.use(express.json());
app.use(participantsRouter);
app.use(registerRouter);
app.use(loginRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
