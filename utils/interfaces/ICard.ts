import ILabel from "./ILabel";
import IUser from "./IUser";

interface ICard {
  id: string,
  name: string,
  dateLastActivity: string,
  members?: IUser[],
  labels: ILabel[],
  idList: string,
}

export default ICard;