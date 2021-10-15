import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class Boards {
  public idBoards = [];

  public Boards = [];

  constructor() {
    makeAutoObservable(this);
  }

  public getData() {
    this.Boards = [];

    axios
      .get(
        `https://api.trello.com/1/members/me?key=${process.env.NEXT_PUBLIC_TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`,
      )
      .then((response: { data: { idBoards: [] } }) => {
        this.idBoards = response.data.idBoards;
      })
      .finally(() => {
        this.idBoards.forEach((idBoard) => {
          axios
            .get(
              `https://api.trello.com/1/boards/${idBoard}?key=${process.env.NEXT_PUBLIC_TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`,
            )
            .then((response: { data: { name: string } }) => {
              this.Boards.push({ name: response.data.name, id: idBoard, desc: response.data.desc });
            });
        });
      });
  }
}

export default Boards;
