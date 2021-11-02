import ICard from "./ICard";

interface IList {
  id: string,
  name: string,
  actions?: ICard[]
}

export default IList;