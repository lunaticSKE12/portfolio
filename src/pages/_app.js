import { ThemeProvider } from '../context';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
    </>
  );
}
