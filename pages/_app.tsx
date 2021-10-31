import '../styles/global.css';
import Header from '../components/header';
import { AuthProvider } from '../services/AuthProvider';
import RootStore, { StoreContext } from '../store/RootStore';

function App({ Component }) {

  return (
    <AuthProvider>
      <StoreContext.Provider value={RootStore}>
        <Header />
        <Component />
      </StoreContext.Provider>
    </AuthProvider>
  );
}

export default App;
