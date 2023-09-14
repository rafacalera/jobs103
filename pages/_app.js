import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb';
import '../styles/global.css'

const theme = createTheme({
    palette: {
        primary: {
            main: "#2C4ECA"
        },
        secondary: {
            main: "#616393"
        },
        text: {
            primary: "#000000",
            secondary: "#4F4F4F"
        }
    },
    typography: {
        fontFamily: "'Poppins', 'sans-serif'"
    }
})

export default function MyApp({ Component, pageProps }) {
    return (
        <>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                    <Component {...pageProps} />
                </LocalizationProvider>
            </ThemeProvider >
        </>
    )
}