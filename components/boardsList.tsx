import { Box } from '@mui/system';
import { observer } from 'mobx-react';

import BoardCard from './boardCard';
import useStore from '../hooks/useStore';

const BoardsList = observer(() => {
 const { boards } = useStore();

  const boardCards = boards.boards?.map((item) => (
    <BoardCard name={item.name} desc={item.desc} id={item.id} members={item.members} key={item.id} />
  ));

  return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '42px' }}>{boardCards}</Box>;
});

export default BoardsList;
