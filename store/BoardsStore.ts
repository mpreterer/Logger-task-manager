import { makeAutoObservable, runInAction } from 'mobx';

import instance from '../services/trelloInstance';
import IActiveBoard from '../utils/interfaces/IActiveBoard';
import IActiveCard from '../utils/interfaces/IActiveCard';
import IBoard from '../utils/interfaces/IBoard';
import ICard from '../utils/interfaces/ICard';
import ICreateBoard from '../utils/interfaces/ICreateBoard';
import IList from '../utils/interfaces/IList';

class BoardsStore {
  public currentCountBoard = 8;
  public allCountBoard: number = 0;
  public boards: IBoard[] = [];
  public activeBoard: IActiveBoard | null = null;
  public activeCard: IActiveCard | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async createCard(card: Partial<ICard>) {
    await instance.post('cards', card).then((res) => {
      runInAction(() => {
        this.activeBoard?.lists?.map((list) => {
          if (list.id === card.idList) {
            const isActions = list.actions !== undefined;

            if (isActions) {
              list.actions?.push(res.data);
            } else {
              Object.assign(list, {
                actions: [res.data],
              });
            }
            console.log('POST Сard created successfully!');
          }
        });
      });
    });
  }

  public async createList(list: Partial<IList>) {
    await instance
      .post('list', list)
      .then((res) => {
        runInAction(() => {
          this.activeBoard?.lists?.push(res.data);
          console.log('POST List created successfully!');
        });
      })
      .catch((e) => console.log(e));
  }

  public async updateList(listID: string, data: Partial<IList>) {
    const res = await instance.put(`lists/${listID}`, data);
    return res;
  }

  public clearActiveCard() {
    runInAction(() => {
      this.activeCard = null;
    });
  }

  public clearActiveBoard() {
    runInAction(() => {
      this.activeBoard = null;
    });
  }

  public increaseCurrentCountBoard() {
    this.currentCountBoard += 4;
    if (this.currentCountBoard > this.allCountBoard) {
      this.currentCountBoard = this.allCountBoard;
    }
  }

  public resetCurrentCountBoard() {
    this.allCountBoard = 0;
    this.currentCountBoard = 8;
    this.boards = [];
  }

  public async getActiveCard(cardID: string) {
    await instance
      .get(`cards/${cardID}?actions=commentCard&members=true&board=true&board_fields=name`)
      .then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            this.activeCard = res.data;
          });

          console.log('Get ActiveCard');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  public async getCardsFromList(listID: string) {
    await instance
      .get(`lists/${listID}/cards?members=true`)
      .then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            if (this.activeBoard) {
              this.activeBoard.lists?.map((list) => {
                // Обновляем карточки у текущего листа
                if (list.id === listID) {
                  list.actions = res.data;

                  return list;
                }

                return list;
              });

              console.log('Get Cards');
            }
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  public async getActiveBoard(boardID: string) {
    await instance
      .get(`boards/${boardID}?lists=all`)
      .then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            const board: IActiveBoard = res.data;
            this.activeBoard = board;

            // Получаем карточки с мемберами для каждого листа
            board.lists?.map((list: IList) => {
              this.getCardsFromList(list.id);
            });
            console.log('Get ActiveBoard');
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  public async createBoard(board: Partial<ICreateBoard>) {
    const res = await instance.post('boards', board);
    const { data, status } = res;

    if (status === 200) {
      runInAction(() => {
        this.boards.push(data as IBoard);
        console.log('POST Board created successfully!');
      });
    }

    return res;
  }

  public async removeBoard(boardID: string) {
    await instance
      .delete(`boards/${boardID}`)
      .then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            this.boards = this.boards.filter((board) => board.id !== boardID);
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  public loadBoards() {
    instance
      .get('member/me/boards?members=all')
      .then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            this.allCountBoard = res.data.length;
            res.data.length = this.currentCountBoard;
            this.boards = res.data;
            console.log('Get Boards');
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default new BoardsStore();
