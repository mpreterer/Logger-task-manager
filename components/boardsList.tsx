import { Box } from '@mui/system';

import BoardCard from './boardCard';
import boards from '../states/boards';

boards.getData();

const BoardsList = () => {
  const boardCards = boards.Boards.map((item) => (
    <BoardCard name={item.name} description={item.desc} key={item.id} />
  ));

  return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '42px' }}>{boardCards}</Box>;
};

export default BoardsList;
