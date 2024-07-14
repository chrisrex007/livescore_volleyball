require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

app.listen(5000, async () => {
  try {
    await client.connect();
    db = client.db("Scores");
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});

app.get("/items", async (req, res) => {
  try {
    const coll = db.collection("temp");
    const result = await coll.find({}).toArray();
    console.log("Fetched items successfully");
    res.json(result);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/update-score", async (req, res) => {
  try {
    const s = req.body;
    const coll = db.collection("temp");
    const temp = { s1: s.score1, s2: s.score2, fin: s.finished };
    const result = await coll.replaceOne({}, temp);
    console.log(temp);
    console.log("Changed Successfully!");
  } catch (e) {
    console.error(e);
  }
});
