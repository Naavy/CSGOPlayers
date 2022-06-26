import { createContext } from "react";

const ScoreboardContext = createContext({});

export interface ScoreboardContextInterface {
  page: number;
  setPage: (page: number) => void;
  searchedPhrase: string;
  setSearchedPhrase: (searchedPhrase: string) => void;
}

export default ScoreboardContext;
