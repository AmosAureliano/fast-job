import { GlobalStyles } from "../../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
