import { createContext, ReactElement, useState } from "react";

type ScoreboardContextType = {
  page: number;
  setPage: (page: number) => void;
  searchedPhrase: string;
  setSearchedPhrase: (searchedPhrase: string) => void;
}

export const ScoreboardContext = createContext<ScoreboardContextType>(
  {} as ScoreboardContextType
);

export const ScoreboardContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [searchedPhrase, setSearchedPhrase] = useState("");

  return (
    <ScoreboardContext.Provider value={{ page, setPage, searchedPhrase, setSearchedPhrase}}>
      {children}
    </ScoreboardContext.Provider>
  )
}

export default ScoreboardContext;
