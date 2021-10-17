import '../styles/global.css';
import Header from '../components/header';
import StorageContext from '../context/storageContext';

import Storage from '../storage/storage';

function App({ Component }) {
  return (
    <StorageContext.Provider value={new Storage()}>
      <Header />
      <Component />
    </StorageContext.Provider>
  );
}

export default App;
