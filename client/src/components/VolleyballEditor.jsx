import React, { useEffect, useState } from "react";
import axios from "axios";

const VolleyballEditor = () => {
  const pageStyle = {
    backgroundColor: "#010A0F",
    color: "#FFFFFF",
  };

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/items");
      setItems(response.data);
    } catch (error) {
      console.error("There was an error fetching the items!", error);
    }
  };

  const [score1, setScore1] = useState([0, 0, 0, 0, 0]);
  const [score2, setScore2] = useState([0, 0, 0, 0, 0]);
  const [finished, setFinished] = useState([0, 0, 0, 0, 0]);
  const [indexF, setIndexF] = useState(); // Index for Finished Rounds
  const [teamid, setTeamid] = useState();
  const [index, setIndex] = useState();
  const [points, setPoints] = useState();
  const [id, setId] = useState(0); //Database id

  const sendUpdatedScoreToBackend = async () => {
    try {
      await axios.post("http://localhost:5000/update-score", {
        score1,
        score2,
        finished,
        id,
      });
      console.log("Score updated successfully!");
    } catch (error) {
      console.error("There was an error updating the score!", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (items.length) {
      setScore1(items[0].s1);
      setScore2(items[0].s2);
      setFinished(items[0].fin);
      setId(items[0]._id);
    }
  }, [items]);

  const updateScore = (teamid, index, p) => {
    if (teamid === 1) {
      const score = [...score1];
      score[index] = p;
      setScore1(score);
    } else if (teamid === 2) {
      const score = [...score2];
      score[index] = p;
      setScore2(score);
    }
  };

  const updateRounds = () => {
    const temp = [...finished];
    temp[indexF] = 1;
    setFinished(temp);
  };

  useEffect(() => {
    if (items.length) {
      const temp = [{ s1: score1, s2: score2, fin: finished, _id: id }];
      setItems(temp);
      sendUpdatedScoreToBackend();
    }
  }, [score1, score2, finished]);

  return (
    <div style={pageStyle} className="h-screen w-screen py-16">
      <div className="bg-gray-900 text-white p-4 md:p-6 border border-gray-300 rounded-lg mx-4">
        <div className="mb-4">
          <input
            placeholder="Team-ID"
            className="bg-inherit mb-2 p-2 border border-gray-400 rounded m-4"
            onChange={(e) => {
              setTeamid(e.target.value);
            }}
          />
          <input
            placeholder="Set-No."
            className="bg-inherit mb-2 p-2 border border-gray-400 rounded m-4"
            onChange={(e) => {
              setIndex(e.target.value - 1);
            }}
          />
          <input
            placeholder="Points"
            className="bg-inherit mb-2 p-2 border border-gray-400 rounded m-4"
            onChange={(e) => {
              setPoints(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700  text-gray-900 font-bold py-2 px-4 rounded m-4"
            onClick={() =>
              updateScore(parseInt(teamid), parseInt(index), parseInt(points))
            }
          >
            Update Score
          </button>
        </div>
        <br />
        <br />
        <h1 className="mb-4">
          For updating the rounds that are finished and reflecting to the main
          FD
        </h1>
        <div className="mb-4">
          <input
            placeholder="Round No."
            className="bg-inherit mb-2 p-2 border border-gray-400 rounded m-4"
            onChange={(e) => {
              setIndexF(e.target.value - 1);
            }}
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded m-4"
            onClick={() => {
              updateRounds();
            }}
          >
            Update Finished Round
          </button>

          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded m-4"
            onClick={() => {
              console.log(score1);
              console.log(score2);
              console.log(finished);
            }}
          >
            LOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolleyballEditor;
