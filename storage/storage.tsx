import Authorization from './authorization';
import Boards from './boards';
import Profile from './profile';

class Storage {
  authorization = new Authorization();
  profile = new Profile();
  boards = new Boards();
}

export default new Storage();
