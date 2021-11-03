import ICard from "./ICard";

interface IList {
  id: string,
  name: string,
  cards?: ICard[],
  idBoard: string,
}

export default IList;