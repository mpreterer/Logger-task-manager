import { types } from 'mobx-state-tree';

import ApiCall from '../services/trello/ApiCall';

const Member = types.model('Member', {
  id: types.identifier,
  fullName: types.string,
  avatarUrl: types.string,
});

const CardComment = types.model('CardComment', {
  id: types.identifier,
  text: types.string,
  member: Member,
});

const Card = types.model('Card', {
  id: types.identifier,
  name: types.string,
  desc: types.string,
  dateLastActivity: types.string,
  labels: types.optional(types.array(types.string), []),
  members: types.array(Member),
  // comments: types.optional(types.array(CardComment), []),
});

const List = types.model('List', {
  id: types.identifier,
  name: types.string,
  cards: types.optional(types.array(Card), []),
});

const Board = types.model('Board', {
  id: types.identifier,
  name: types.string,
  desc: types.string,
  members: types.optional(types.array(Member), []),
  lists: types.optional(types.array(List), []),
});

const BoardsStore = types.model('BoardsStore', {
  boards: types.optional(types.array(Board), []),
}).actions(self => {
  return {
    addBoard (board) {
      self.boards.push(board);
    },
    afterCreate() {
      ApiCall.instance('member/me/boards').then(response => {
        response.data.map(board => {
          ApiCall.instance(`boards/${board.id}?lists=all&cards=all&members=all`).then(res => {
            const confirmedBoard = {
              id: res.data.id,
              name: res.data.name,
              desc: res.data.desc,
              members: res.data.members,
              lists: res.data.lists.map(list => {
                return {
                  id: list.id,
                  name: list.name,
                  cards: res.data.cards
                    .filter(card => card.idList === list.id)
                      .map(card => {
                        card.members = res.data.members
                        card.labels = card.labels.map(label => {
                          return label.color;
                        });
  
                        return card;
                  }),
                }
              }),
            };

            self.addBoard(confirmedBoard)
          })
        }) 
      })
    }
  }
});

export default BoardsStore;