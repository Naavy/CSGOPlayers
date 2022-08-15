import { Box, Grid } from "@mui/material";
import { ScoreboardContextProvider } from "../../context/ScoreboardContext";
import logo from "../../images/logo.png";
import ResultsList from "../ResultsList/ResultsList";
import Searcher from "../Searcher/Searcher";
import styles from "./Scoreboard.module.scss";

const Scoreboard = (): JSX.Element => {
  return (
    <ScoreboardContextProvider>
      <Grid
        container
        alignItems="center"
        flexDirection="column"
        flexWrap="nowrap"
        className={styles.wrapper}
      >
        <Box className={styles.imageWrapper}>
          <img src={logo} className={styles.image} alt="logo" />
        </Box>
        <Box className={styles.searcher}>
          <Searcher />
        </Box>
        <Box className={styles.list}>
          <ResultsList />
        </Box>
      </Grid>
    </ScoreboardContextProvider>
  );
};

export default Scoreboard;
