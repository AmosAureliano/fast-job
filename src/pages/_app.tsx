import { GlobalStyles } from '../styles/GlobalStyle';

import Session from '../contexts/Session';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <Session>
        <Component {...pageProps} />
      </Session>
    </>
  );
}

export default MyApp;
