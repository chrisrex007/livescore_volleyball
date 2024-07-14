const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log(`Connected to the port 5000`);
});

app.get("/items", (req, res) => {
  try {
    const { getS1, getS2, getFin } = require("./db");
    const result = { s1: getS1(), s2: getS2(), fin: getFin() };
    res.json(result);
    console.log("Fetched items successfully");
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/update-score", async (req, res) => {
  try {
    const { score1, score2, finished } = req.body;
    const { setScores } = require("./db");
    setScores(score1, score2, finished);
    console.log({ s1: score1, s2: score2, fin: finished });
    console.log("Changed Successfully!");
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});
