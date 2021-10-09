import { makeAutoObservable } from 'mobx';
import axios from 'axios';

const KEY = '66196052e0874cd6053399639259887c';
const TOKEN = '26374b296bd629e6cb6da28858ba60a3d2b9c723761f99ae126b42f15d252a0c';

class Profile {
  fullName = '';
  countBoards = 0;
  bio = '';

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init() {
    this.getData();
  }

  getData() {
    axios.get(`https://api.trello.com/1/members/me?key=${KEY}&token=${TOKEN}`).then((response) => {
      this.fullName = response.data.fullName;
      this.countBoards = response.data.idBoards.length;
      this.bio = response.data.bio;
    });
  }
}

export default new Profile();
