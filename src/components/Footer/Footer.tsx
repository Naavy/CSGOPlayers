import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import ScoreboardContext, { ScoreboardContextInterface } from "../../context/ScoreboardContext";
import {
  StyledIconButton,
  StyledNextPage,
  StyledPrevPage
} from "./IconPagination.components";
import styles from "./Footer.module.scss";

interface FooterProps {
  size: number;
  totalPages: number;
}

const Footer = ({ size, totalPages }: FooterProps): JSX.Element => {
  const { page, setPage } = useContext(
    ScoreboardContext
  ) as ScoreboardContextInterface;

  const goToNextPage = (): void => {
    setPage(page + 1);
  };

  const goToLastPage = (): void => {
    setPage(totalPages);
  };

  const goToPrevPage = (): void => {
    setPage(page - 1);
  };

  const goToFirstPage = (): void => {
    setPage(1);
  };

  return (
    <Grid container justifyContent="space-between">
      <Box className={styles.perPage}>{size} per page</Box>
      <Box>
        <StyledIconButton disabled={page === 1} onClick={goToFirstPage}>
          <FirstPageIcon fontSize="small" />
        </StyledIconButton>
        <StyledIconButton disabled={page === 1} onClick={goToPrevPage}>
          <StyledPrevPage fontSize="small" />
        </StyledIconButton>
        Page {page} of {totalPages}
        <StyledIconButton disabled={page === totalPages} onClick={goToNextPage}>
          <StyledNextPage fontSize="small" />
        </StyledIconButton>
        <StyledIconButton disabled={page === totalPages} onClick={goToLastPage}>
          <LastPageIcon fontSize="small" />
        </StyledIconButton>
      </Box>
    </Grid>
  );
};

export default Footer;
