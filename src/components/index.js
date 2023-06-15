import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import LeaderboardDetail from "./LeaderboardDetail";
import "./leaderboard.css";

const Leaderboard = ({ leaderboardData }) => {
  if (!leaderboardData) return null;

  // const sortedLeaderboard = leaderboardData.sort((a, b) => {
  //   if (a.score === b.score)
  //     leaderboardData.sort((a, b) => {
  //       return a.thru - b.thru;
  //     });
  //   return a.score - b.score;
  // });

  const sortedLeaderboard = leaderboardData.sort((a, b) => {
    if (a.score === b.score) {
      return a.thru - b.thru;
    }
    return a.score - b.score;
  });

  return (
    <>
      <Grid
        style={{ margin: "15px" }}
        container
        gap={1}
        direction="row"
        justifyContent="space-between"
        className="leaderboardContainer">
        <Grid container className="title" justifyContent="space-between">
          <p>Pos</p>
          <p>Player</p>
          <p>Tot</p>
          <p>Score</p>
          <p>Thru</p>
        </Grid>
        <Divider style={{ width: "100%" }} />
        {sortedLeaderboard.map((sortedItems, i) => {
          return (
            <LeaderboardDetail
              sortedItems={sortedItems}
              key={sortedItems.player_id}
              index={i + 1}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Leaderboard;
