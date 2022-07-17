import { createTheme } from '@mui/material/styles';
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  export const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });