import { Box, Container } from '@mui/material';

import BoardsList from '../components/boardsList';
import returnToHomeNotLoginUser from '../lib/returnToHomeNotLoginUser';
import storage from '../storage/storage';

function Boards() {
  returnToHomeNotLoginUser();
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
