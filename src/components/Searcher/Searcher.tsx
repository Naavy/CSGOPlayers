import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextField } from "./StyledTextField.components";
import { useContext } from "react";
import ScoreboardContext, { ScoreboardContextInterface } from "../../context/ScoreboardContext";

const Searcher = (): JSX.Element => {
  const { setSearchedPhrase } = useContext(
    ScoreboardContext
  ) as ScoreboardContextInterface;

  return (
    <StyledTextField
      fullWidth
      placeholder="Search for teams, players, matches..."
      variant="outlined"
      onChange={(event) => setSearchedPhrase(event.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
};

export default Searcher;
