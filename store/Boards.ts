import { types } from 'mobx-state-tree';
import ApiCall from '../services/trello/ApiCall';

const Board = types.model('Board', {
  id: types.string,
  name: types.string,
  desc: types.string,
});

const BoardsStore = types.model('BoardsStore', {
  boards: types.array(Board),
}).actions(self => {
  return {
    addBoards: (boards) => {
      self.boards = boards;
    },
    afterCreate() {
      ApiCall.get('member/me/boards').then(res => {
        self.addBoards(res);
      })
    }
  }
});

export default BoardsStore;