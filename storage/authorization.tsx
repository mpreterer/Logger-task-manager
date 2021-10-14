import { makeAutoObservable } from 'mobx';

class Authorization {
  isLogin = false;

  constructor() {
    makeAutoObservable(this);
  }

  login() {
    this.isLogin = true;
  }
}

export default Authorization;
