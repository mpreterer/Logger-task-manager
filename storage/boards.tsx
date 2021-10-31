import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

class Boards {
  public boards = [];
  private token: string | null;

  constructor() {
    makeAutoObservable(this);
    this.token = this.getToken();
  }

  private getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token')
    }

    return null;
  }

  public async getData() {
    const idBoards = await this.getBoardsId();

    const boards = await this.getBoards(idBoards);

    console.log('start');

    this.updateBoards(boards);
  }

  //Не работает. Первый лог выдает массив, а второй неопределенное значение, вместо первого элемента массива, пока что обновление данных работает за счет 53 строки
  private updateBoards(boards) {
    console.log(boards);
    console.log(boards[0]);
    runInAction(() => {
      boards.forEach((item) => {});
      this.boards = boards;
    });
  }

  private async getBoardsId() {
    const response: { data: { idBoards: [] } } = await axios.get(
      `https://api.trello.com/1/members/me?key=${process.env.NEXT_PUBLIC_TRELLO_KEY}&token=${this.token}`,
    );

    return response.data.idBoards;
  }

  private async getBoard(idBoard: string) {
    const response: { data: { idBoards: []; name: string; desc: string } } = await axios.get(
      `https://api.trello.com/1/boards/${idBoard}?key=${process.env.NEXT_PUBLIC_TRELLO_KEY}&token=${this.token}`,
    );

    return { name: response.data.name, id: idBoard, desc: response.data.desc };
  }

  private async getBoards(idBoards: []) {
    const boards = [];

    idBoards.forEach(async (idBoard) => {
      const board = await this.getBoard(idBoard);

      this.boards.push(board);
      boards.push(board);
    });

    return boards;
  }
}

export default Boards;
