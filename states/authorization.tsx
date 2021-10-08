import { makeAutoObservable } from 'mobx';

class Authorization {
  isLogin = false;

  constructor() {
    makeAutoObservable(this);
  }

  login() {
    console.log('before click: ', this.isLogin);
    this.isLogin = true;
    console.log('after click: ', this.isLogin);
  }
}

export default new Authorization();
