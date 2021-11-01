import { useContext } from 'react';

import { StoreContext } from '../store/RootStore';

const useStore = () => {
  return useContext(StoreContext);
}

export default useStore;