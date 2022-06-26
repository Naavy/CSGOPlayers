import { Box, Grid } from "@mui/material";
import { useState } from "react";
import ScoreboardContext from "../../context/ScoreboardContext";
import logo from "../../images/logo.png";
import ResultsList from "../ResultsList/ResultsList";
import Searcher from "../Searcher/Searcher";
import styles from "./Scoreboard.module.scss";

const Scoreboard = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [searchedPhrase, setSearchedPhrase] = useState("");

  return (
    <ScoreboardContext.Provider value={{ page, setPage, searchedPhrase, setSearchedPhrase }}>
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
    </ScoreboardContext.Provider>
  );
};

export default Scoreboard;
