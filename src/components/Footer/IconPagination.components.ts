import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const StyledIconButton = styled(IconButton)(() => ({
  "&.MuiIconButton-root": {
    color: "#cecfd2",
    "&.Mui-disabled": {
      color: "#6d7c8a",
    }
  }
}));

export const StyledNextPage = styled(ArrowForwardIosIcon)(() => ({
  "&.MuiSvgIcon-root": { width: "12px" }
}));

export const StyledPrevPage = styled(ArrowBackIosIcon)(() => ({
  "&.MuiSvgIcon-root": { width: "12px" }
}));
