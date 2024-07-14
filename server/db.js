const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "data.json");

function readData() {
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
}

function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

function getS1() {
  const data = readData();
  return data.s1;
}

function getS2() {
  const data = readData();
  return data.s2;
}

function getFin() {
  const data = readData();
  return data.fin;
}

function setScores(score1, score2, finished) {
  const data = readData();
  data.s1 = score1;
  data.s2 = score2;
  data.fin = finished;
  writeData(data);
}

module.exports = { getS1, getS2, getFin, setScores };
