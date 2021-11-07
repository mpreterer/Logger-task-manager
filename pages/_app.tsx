import '../styles/global.css';
import Header from '../components/header';
import { AuthProvider } from '../services/AuthProvider';
import RootStore, { StoreContext } from '../store/RootStore';

import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../components/theme';

function App({ Component }) {
  return (
    <AuthProvider>
      <StoreContext.Provider value={RootStore}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Header />
            <Component />
          </ThemeProvider>
        </StyledEngineProvider>
      </StoreContext.Provider>
    </AuthProvider>
  );
}

export default App;
