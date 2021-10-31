import ICard from "./ICard";

interface IList {
  id: string,
  name: string,
  cards?: ICard[]
}

export default IList;