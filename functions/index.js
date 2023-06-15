const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));
app.get("/", (req, res) => {
  res.send("hello from firebase");
});
// app.listen(3000, () => console.log("server on 3000"));
exports.expressApi = onRequest(app);
