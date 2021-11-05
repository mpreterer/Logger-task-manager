import IUser from './IUser';

interface IBoard {
  id: string,
  name: string,
  desc: string,
  members: IUser[]
}

export default IBoard;