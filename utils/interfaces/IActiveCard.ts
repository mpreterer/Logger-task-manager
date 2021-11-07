import IUser from './IUser';
import ICardComment from './ICardComment';
import IBoard from './IBoard';

interface IActiveCard {
  id: string;
  name: string;
  desc: string;
  dateLastActivity: string;
  members?: IUser[];
  actions?: ICardComment[];
  board: Partial<IBoard>;
}

export default IActiveCard;
