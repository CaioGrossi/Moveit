import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import ChallengesProvider from "../context/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
