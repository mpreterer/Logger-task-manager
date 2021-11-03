import '../styles/global.css';
import Header from '../components/header';
import { AuthProvider } from '../services/AuthProvider';
import RootStore, { StoreContext } from '../store/RootStore';

import StyledEngineProvider from '@mui/material/StyledEngineProvider';

function App({ Component }) {
  return (
    <AuthProvider>
      <StoreContext.Provider value={RootStore}>
        <StyledEngineProvider injectFirst>
          <Header />
          <Component />
        </StyledEngineProvider>
      </StoreContext.Provider>
    </AuthProvider>
  );
}

export default App;
