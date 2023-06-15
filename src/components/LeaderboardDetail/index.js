import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

const LeaderboardDetail = ({ sortedItems, index }) => {
  const [player, setPlayer] = useState(null);

  const API_KEY = process.env.GOLF_LEADERBOARD_KEY;

  const playerAPI = `https://golf-tech-test.airg.dev/api/1/players/${sortedItems.player_id}/`;
  const fetchPlayer = () => {
    fetch(playerAPI, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPlayer(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchPlayer();
  }, []);

  if (!player) return null;

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        gap={1}
        item
        xs={12}
        sm={12}
        md={12}>
        <p>{index}</p>
        <p>
          {player.first_name} {player.last_name}
        </p>
        <p>{sortedItems.total}</p>
        <p>{sortedItems.score}</p>
        <p>{sortedItems.thru}</p>
      </Grid>
    </>
  );
};

export default LeaderboardDetail;
