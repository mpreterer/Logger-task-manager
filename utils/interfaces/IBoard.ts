import IUser from './IUser';

interface IBoard {
  id: string;
  name: string;
  desc: string;
  members: IUser[];
  prefs: { backgroundColor: string };
}

export default IBoard;
