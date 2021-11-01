import IUser from "./IUser";

interface ICardComment {
  id: string,
  memberCreator: IUser,
  data: {
    text: string
  }
}

export default ICardComment;