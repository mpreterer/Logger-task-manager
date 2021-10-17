import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import { useContext } from 'react';

import BoardCard from './boardCard';
import StorageContext from '../context/storageContext';
import useStore from '../hooks/useStore';

const BoardsList = observer(() => {
 const { boards } = useStore();

  const boardCards = boards.boards?.map((item) => (
    <BoardCard name={item.name} description={item.desc} key={item.id} />
  ));

  return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '42px' }}>{boardCards}</Box>;
});

export default BoardsList;
