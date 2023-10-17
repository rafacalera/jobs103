import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "dayjs/locale/pt-br";
import "../styles/global.css";

import { Provider } from "react-redux";
import store from "../redux/store";

const theme = createTheme({
  palette: {
    background: {
      default: "#E1E1FF",
    },
    primary: {
      main: "#2C4ECA",
    },
    secondary: {
      main: "#616393",
    },
    text: {
      primary: "#000000",
      secondary: "#4F4F4F",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'sans-serif'",
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="pt-br"
          >
            <Component {...pageProps} />
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}
