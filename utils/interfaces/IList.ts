import ICard from "./ICard";

interface IList {
  id: string,
  name: string,
  idBoard: string,
  actions?: ICard[]
}

export default IList;