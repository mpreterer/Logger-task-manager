import IUser from "./IUser";

interface ICard {
  id: string,
  name: string,
  dateCreated: string,
  dateLastActivity: string,
  members?: IUser[]
}

export default ICard;