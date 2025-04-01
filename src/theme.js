import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Pretendard-Regular",
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--primary-color)",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d32f2f",
          },
          "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d32f2f",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "var(--primary-color)",
          },
          "&.Mui-error": {
            color: "#d32f2f",
          },
        },
      },
    },
  },
});

export default theme;
