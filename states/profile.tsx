import { makeAutoObservable } from 'mobx';
import axios from 'axios';

import constants from '../enums/constants';

class Profile {
  fullName = '';

  countBoards = 0;

  bio = '';

  avatarUrl = '';

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init() {
    this.getData();
  }

  getData() {
    axios
      .get(`${constants.URL_API_TRELLO}1/members/me?key=${constants.KEY}&token=${constants.TOKEN}`)
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
