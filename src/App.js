import "./App.css";
import { useState, useEffect } from "react";
import Leaderboard from "./components";

function App() {
  const [golfLeaderboard, setGolfLeaderboard] = useState(null);

  const API_KEY = process.env.GOLF_LEADERBOARD_KEY;
  const golfLeaderboardApi = `https://golf-tech-test.airg.dev/api/1/events/1000/leaderboard/`;

  const fetchGolfLeaderboard = () => {
    fetch(golfLeaderboardApi, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGolfLeaderboard(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchGolfLeaderboard();
  }, []);

  return <Leaderboard leaderboardData={golfLeaderboard} />;
}

export default App;
