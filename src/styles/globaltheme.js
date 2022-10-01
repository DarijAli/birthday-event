const { createTheme } = require("@mui/material")

export const theme = createTheme({
  palette: {
    primary: {
      main: "#240D57",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Helvetica",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
})
