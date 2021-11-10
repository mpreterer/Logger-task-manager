import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

import useStore from '../hooks/useStore';
import IBoard from '../utils/interfaces/IBoard';
import BoardCard from './boardCard';

const BoardsList = observer(() => {
  const { boards } = useStore();
  useEffect(() => {
    boards.loadBoards();
  }, []);

  const boardCards = boards.boards.map((item: IBoard) => (
    <BoardCard
      name={item?.name}
      desc={item?.desc}
      id={item?.id}
      members={item?.members}
      key={item?.id}
    />
  ));

  return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '42px' }}>{boardCards}</Box>;
});

export default BoardsList;
