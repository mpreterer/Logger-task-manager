import '../styles/global.css';
import Header from '../components/header';
import StorageContext from '../context/storageContext';

import Storage from '../storage/storage';
import RootStore from '../store/RootStore';
import { createContext } from 'react';

const store = RootStore.create({});
export const StoreContext = createContext(store);

function App({ Component }) {
  return (
    <StoreContext.Provider value={store}>
      <Header />
      <Component />
    </StoreContext.Provider>
  );
}

export default App;
