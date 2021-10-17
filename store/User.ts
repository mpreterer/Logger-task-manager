import { types, flow } from 'mobx-state-tree';
import ApiCall from '../services/trello/ApiCall';

const User = types.model('User', {
  fullName: types.string,
  bio: types.string,
  avatarUrl: types.string,
  idBoards: types.array(types.string),
});

const UserStore = types.model('UserStore', {
  user: types.maybe(User)
}).actions(self => {
  return {
    load: flow(function* () {
      self.user = yield ApiCall.get('members/me');
    }),
    afterCreate() {
      self.load();
    }
  }
});

export default UserStore;