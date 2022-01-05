import Theme from '../styles/theme';
import { ThemeProvider } from './context';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
    </>
  );
};
export default App;
