import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import { useContext, useEffect } from 'react';

import BoardCard from './boardCard';
import StorageContext from '../context/storageContext';

const BoardsList = observer(() => {
  const storage = useContext(StorageContext);

  useEffect(() => {
    storage.boards.getData();
  }, []);

  const boardCards = storage.boards.boards.map((item) => (
    <BoardCard name={item.name} description={item.desc} key={item.id} />
  ));

  return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '42px' }}>{boardCards}</Box>;
});

export default BoardsList;
