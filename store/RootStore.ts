import { types } from 'mobx-state-tree';
import BoardsStore from './Boards';
import UserStore from './User';

const RootStore = types.model('RootStore', {
  user: types.optional(UserStore, {}),
  boards: types.optional(BoardsStore, {}),
});

export default RootStore;