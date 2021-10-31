import IBoard from "./IBoard";
import IList from "./IList";

interface IActiveBoard extends IBoard {
  lists?: IList[]
}

export default IActiveBoard;