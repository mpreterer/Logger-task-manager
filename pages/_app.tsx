import '../styles/global.css';
import Header from '../components/header';

import RootStore from '../store/RootStore';
import { createContext } from 'react';
import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

const store = RootStore.create({});
export const StoreContext = createContext(store);

function App({ Component }) {
  const { user } = useStore();

  return (
    <StoreContext.Provider value={store}>
      <Header name={user.user?.fullName} avatarUrl={user.user?.avatarUrl}/>
      <Component />
    </StoreContext.Provider>
  );
}

export default observer(App);
