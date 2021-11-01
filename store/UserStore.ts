import { makeAutoObservable, runInAction } from 'mobx';

import instance from '../services/trelloInstance';
import IUser from '../utils/interfaces/IUser';

class UserStore {

  public activeUser: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async getUser () {
    await instance.get('member/me').then(res => {
      runInAction(() => {
        this.activeUser = res.data;
        console.log('Get User')
      })
    });
  }
}

export default new UserStore();
