import React, { useState, useEffect } from "react";
import axios from "axios";

const Volleyball = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/items");
        setItems(response.data);
      } catch (error) {
        console.error("There was an error fetching the items!", error);
      }
    };

    fetchItems();
    const intervalId = setInterval(fetchItems, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const d = new Date();
  const [hours, setHours] = useState(
    d.getHours().toString().length === 1 ? "0" + d.getHours() : d.getHours()
  );
  const [mins, setMins] = useState(
    d.getMinutes().toString().length === 1
      ? "0" + d.getMinutes()
      : d.getMinutes()
  );

  const date =
    d.getDate().toString().length === 1 ? "0" + d.getDate() : d.getDate();
  const month =
    d.getMonth().toString().length === 1 ? "0" + d.getMonth() : d.getMonth();
  const year = d.getFullYear();

  setInterval(() => {
    //updating the mins every by checking everysecond
    const d = new Date();
    setMins(
      d.getMinutes().toString().length === 1
        ? "0" + d.getMinutes()
        : d.getMinutes()
    );
  }, 1000);

  useEffect(() => {
    setInterval(() => {
      const d = new Date();
      setHours(
        d.getHours().toString().length === 1 ? "0" + d.getHours() : d.getHours()
      );
    }, 1000 * 60);
  }, [mins]);

  const [status, setStatus] = useState("Live");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [team1, setTeamname1] = useState("Serbia");
  const [team2, setTeamname2] = useState("Slovenia");
  const [team1_img, setTeam1Img] = useState(
    "https://static.flashscore.com/res/image/data/vDiyVxhl-6ys9CWQj.png"
  );
  const [team2_img, setTeam2Img] = useState(
    "https://static.flashscore.com/res/image/data/fBWBjchl-dWxvhZJm.png"
  );
  const [setScores1, setSetScores1] = useState([2, 13, 27, 14, 25]); //should be updated by volleyballeditor.jsx
  const [setScores2, setSetScores2] = useState([3, 15, 22, 14, 25]);
  const [finished, setFinished] = useState([1, 1, 1, 1, 1]);

  useEffect(() => {
    if (items.length) {
      setSetScores1(items[0].s1);
      setSetScores2(items[0].s2);
      setFinished(items[0].fin);
    }
  }, [items]);

  useEffect(() => {
    // Logic for updating the Final score
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < [...finished].length; i++) {
      const t = [...finished];
      const t1 = [...setScores1];
      const t2 = [...setScores2];
      if (t[i] == 1) {
        if (t1[i] > t2[i]) count1++;
        else if (t2[i] > t1[i]) count2++;
        if (i == [...finished].length - 1) setStatus("Finished");
      } else {
        break;
      }
    }
    setScore1(count1);
    setScore2(count2);
  }, [finished]);

  const pageStyle = {
    backgroundColor: "#010A0F",
    color: "#FFFFFF",
  };

  const setSets = () => {
    const setHeaders = [];
    for (let i = 0; i < 5; i++) {
      setHeaders.push(
        <th key={i} className="px-2 md:px-4 py-2 text-center">
          Set {i + 1}
        </th>
      );
    }
    return setHeaders;
  };

  const setTeam1 = () => {
    const setHeaders = [];
    for (let i = 0; i < 5; i++) {
      setHeaders.push(
        <td key={i} className="px-2 md:px-4 py-2 text-center">
          {setScores1[i]}
        </td>
      );
    }
    return setHeaders;
  };

  const setTeam2 = () => {
    const setHeaders = [];
    for (let i = 0; i < 5; i++) {
      setHeaders.push(
        <td key={i} className="px-2 md:px-4 py-2 text-center">
          {setScores2[i]}
        </td>
      );
    }
    return setHeaders;
  };

  return (
    <div style={pageStyle} className="h-screen w-screen py-16">
      <div className="bg-gray-900 text-white p-4 md:p-6 border border-gray-300 rounded-lg mx-4">
        {/* Match Start Time */}
        <div className="text-center text-gray-400 text-lg md:text-xl font-semibold mb-4">
          {date}.{month}.{year} {hours}:{mins}
        </div>

        {/* Teams and Score Section */}
        <div className="flex items-center justify-between">
          {/* Home Team Section */}
          <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-0">
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={team1_img}
              alt={team1}
            />
            <div className="font-semibold text-sm md:text-lg">{team1}</div>
          </div>

          {/* Score Section */}
          <div className="flex flex-col items-center mb-2 md:mb-0">
            <span className="text-2xl md:text-4xl font-bold">
              {score1} - {score2}
            </span>
            <div className="text-xs md:text-sm">{status}</div>
          </div>

          {/* Away Team Section */}
          <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-0">
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={team2_img}
              alt={team2}
            />
            <div className="font-semibold text-sm md:text-lg">{team2}</div>
          </div>
        </div>

        {/* Score Table */}
        <div className="mt-4 md:mt-6 overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-2 md:px-4 py-2 text-left">Team</th>
                {setSets()}
              </tr>
            </thead>
            <tbody>
              {/* Serbia */}
              <tr className="border-b border-gray-600">
                <td className="px-2 md:px-4 py-2 flex items-center">
                  <img
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
                    src={team1_img}
                    alt={team1 + " Flag"}
                  />
                  <span className="font-semibold text-xs md:text-sm">
                    {team1}
                  </span>
                </td>
                {setTeam1()}
              </tr>

              {/* Slovenia */}
              <tr className="border-b border-gray-600">
                <td className="px-2 md:px-4 py-2 flex items-center">
                  <img
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
                    src={team2_img}
                    alt={team2 + " Flag"}
                  />
                  <span className="font-semibold text-xs md:text-sm">
                    {team2}
                  </span>
                </td>
                {setTeam2()}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Volleyball;
