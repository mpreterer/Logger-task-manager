import { Box, Container } from '@mui/material';
import { useContext } from 'react';

import BoardsList from '../components/boardsList';
import returnToHomeNotLoginUser from '../lib/returnToHomeNotLoginUser';
import StorageContext from '../context/storageContext';

function Boards() {
  returnToHomeNotLoginUser();
  const storage = useContext(StorageContext);
  storage.boards.getData();

  return (
    <Container>
      <Box sx={{ paddingTop: '210px' }}>
        <BoardsList />
      </Box>
    </Container>
  );
}

export default Boards;
