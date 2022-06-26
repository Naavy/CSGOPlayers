import useFetch from "react-fetch-hook";
import { Box, Grid } from "@mui/material";
import whitelogo from "../../images/whitelogo.png";
import styles from "./ResultsList.module.scss";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import ScoreboardContext, { ScoreboardContextInterface } from "../../context/ScoreboardContext";

interface Data {
  size: number;
  totalPages: number;
  content: {
    birthYear: number;
    country: string;
    id: number;
    name: string;
    nick: string;
    team: {
      lastResults: string[];
      rankingPosition: number;
      lastRankingPosition: number;
    };
  }[];
}

const ResultsList = (): JSX.Element => {
  const { page, searchedPhrase } = useContext(ScoreboardContext) as ScoreboardContextInterface;
  const [url, setUrl] = useState(`https://api.ggpredict.dev:8080/restapi/players?page=${page}&searchBy=${searchedPhrase}`);

  const { isLoading, data } = useFetch<Data>(url);

  const winCount = (lastResults: string[]): number => {
    if (lastResults === undefined) return 0;
    return lastResults.filter((item) => item === "W").length;
  };

  const lostCount = (lastResults: string[]): number => {
    if (lastResults === undefined) return 0;
    return lastResults.filter((item) => item === "L").length;
  };

  useEffect(() => {
    setUrl(`https://api.ggpredict.dev:8080/restapi/players?page=${page}&searchBy=${searchedPhrase}`);
  }, [page, searchedPhrase]);

  if (isLoading) return <Box> Loading... </Box>;

  if (data == null || data.content.length === 0)
    return <Box> There is nothing here</Box>;

  return (
    <Box>
      <Grid container justifyContent="flex-start" className={styles.header}>
        PLAYERS
      </Grid>
      <Grid container className={styles.namesColumns}>
        <Grid item xs={1} />
        <Grid item xs={2}>
          NAME
        </Grid>
        <Grid item xs={2}>
          NICK
        </Grid>
        <Grid container item justifyContent="center" xs={2}>
          AGE
        </Grid>
        <Grid container item justifyContent="center" xs={2}>
          COUNTRY
        </Grid>
        <Grid container item xs={3}>
          <Grid container item xs={4} justifyContent="center" className={styles.won}>
            WON
          </Grid>
          <Grid container item xs={4} justifyContent="center">
            DRAWN
          </Grid>
          <Grid container item xs={4} justifyContent="center" className={styles.lost}>
            LOST
          </Grid>
        </Grid>
      </Grid>
      <hr className={styles.divider} />
      {data.content.map((item) => (
        <Grid key={item.id} container alignItems="center" className={styles.data}>
          <Grid container item xs={1} alignItems="center" className={styles.whiteLogoWrapper}>
            <img src={whitelogo} alt="white-logo" className={styles.whiteLogo} />
            <Box className={styles.line} />
          </Grid>
          <Grid item xs={2}>
            {item.name}
          </Grid>
          <Grid item xs={2}>
            {item.nick}
          </Grid>
          <Grid container item justifyContent="center" xs={2}>
            {new Date().getFullYear() - item.birthYear}
          </Grid>
          <Grid container item justifyContent="center" xs={2}>
            {item.country}
          </Grid>
          <Grid container item xs={3}>
            <Grid container item xs={4} justifyContent="center" className={styles.won}>
              {winCount(item.team.lastResults)}
            </Grid>
            <Grid container item xs={4} justifyContent="center">
              0
            </Grid>
            <Grid container item xs={4} justifyContent="center" className={styles.lost}>
              {lostCount(item.team.lastResults)}
            </Grid>
          </Grid>
          <hr className={styles.divider} />
        </Grid>
      ))}
      <Grid container justifyContent="space-between" className={styles.footer}>
        <Footer size={data.size} totalPages={data.totalPages - 1} />
      </Grid>
    </Box>
  );
};

export default ResultsList;
