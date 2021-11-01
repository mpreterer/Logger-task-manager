import IUser from "./IUser";
import ICardComment from "./ICardComment";

interface IActiveCard {
  id: string,
  name: string,
  desc: string,
  dateLastActivity: string,
  members?: IUser[]
  comments?: ICardComment[]
}

export default IActiveCard;