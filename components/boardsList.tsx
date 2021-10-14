import { Box } from '@mui/system';
import { observer } from 'mobx-react';

import BoardCard from './boardCard';
import storage from '../storage/storage';

const BoardsList = observer(() => {
  const boardCards = storage.boards.Boards.map((item) => (
    <BoardCard name={item.name} description={item.desc} key={item.id} />
  ));

  return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '42px' }}>{boardCards}</Box>;
});

export default BoardsList;
