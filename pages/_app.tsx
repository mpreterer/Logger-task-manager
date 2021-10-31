import '../styles/global.css';
import Header from '../components/header';
import StorageContext from '../context/storageContext';

import Storage from '../storage/storage';
import { AuthProvider } from '../services/AuthProvider';

function App({ Component }) {
  return (
    <AuthProvider>
      <StorageContext.Provider value={new Storage()}>
        <Header />
        <Component />
      </StorageContext.Provider>
    </AuthProvider>
  );
}

export default App;
