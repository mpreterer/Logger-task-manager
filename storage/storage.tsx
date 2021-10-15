import Boards from './boards';
import Profile from './profile';

class Storage {
  profile = new Profile();
  boards = new Boards();
}

export default new Storage();
