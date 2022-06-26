import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#2b2f3f",
    color: "#fff",
    fontSize: "11px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "6px",
  },
  "& .MuiSvgIcon-root": {
    color: "#4d505e",
    fontSize: "14px",
  }
}));
