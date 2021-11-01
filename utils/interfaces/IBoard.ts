import { IUser } from "../../store/profile";

interface IBoard {
  id: string,
  name: string,
  desc: string,
  members: IUser[]
}

export default IBoard;