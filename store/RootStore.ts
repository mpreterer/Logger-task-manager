import UserStore from './UserStore';
import BoardsStore from './BoardsStore';
import { createContext } from 'react';

const RootStore = {
  user: UserStore,
  boards: BoardsStore,
};

export const StoreContext = createContext(RootStore);

export default RootStore;
