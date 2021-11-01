import ILabel from "./ILabel";
import IUser from "./IUser";

interface ICard {
  id: string,
  name: string,
  dateCreated: string,
  dateLastActivity: string,
  members?: IUser[],
  labels: ILabel[]
}

export default ICard;