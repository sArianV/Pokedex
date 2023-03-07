import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Providers from "./providers";
import localFont from "next/font/local";
const myFont = localFont({ src: "./Flexo-Regular.ttf" });

const theme = createTheme({
  typography: {
    fontFamily: [myFont.style.fontFamily].join(","),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ThemeProvider>
  );
}
