import ICardComment from './ICardComment';
import IBoard from './IBoard';
import ICard from './ICard';

interface IActiveCard extends ICard {
  desc: string;
  actions?: ICardComment[];
  board: Partial<IBoard>;
}

export default IActiveCard;
