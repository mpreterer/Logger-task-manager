import BoardCard from '../components/boardCard';
import returnToHomeNotLoginUser from '../lib/returnToHomeNotLoginUser';

function Boards() {
  returnToHomeNotLoginUser();

  return <BoardCard />;
}

export default Boards;
