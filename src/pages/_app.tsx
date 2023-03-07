import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import Providers from "./providers";
const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ThemeProvider>
  );
}
