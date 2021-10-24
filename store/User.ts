import { types, flow } from 'mobx-state-tree';
import ApiCall from '../services/trello/ApiCall';

const User = types.model('User', {
  fullName: types.identifier,
  bio: types.string,
  avatarUrl: types.string,
  idBoards: types.array(types.string),
});

const UserStore = types.model('UserStore', {
  user: types.maybe(User)
}).actions(self => {
  return {
    addUser (user) {
      self.user = user;
    },
    afterCreate() {
      ApiCall.instance('members/me').then(res => {
        self.addUser(res.data);
      })
    }
  }
});

export default UserStore;