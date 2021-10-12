import { makeAutoObservable } from 'mobx';
import axios from 'axios';

import { KEY, TOKEN } from '../constants/constants';

class Profile {
  fullName = '';

  countBoards = 0;

  bio = '';

  avatarUrl = '';

  constructor() {
    makeAutoObservable(this);
  }

  getData() {
    axios
      .get(`https://api.trello.com/1/members/me?key=${KEY}&token=${TOKEN}`)
      .then(
        (response: {
          data: { fullName: string; idBoards: []; bio: string; avatarUrl: string };
        }) => {
          this.fullName = response.data.fullName;
          this.countBoards = response.data.idBoards.length;
          this.bio = response.data.bio;
          this.avatarUrl = `${response.data.avatarUrl}/170.png`;
        },
      );
  }
}

export default new Profile();
