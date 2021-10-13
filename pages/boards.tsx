import { Box, Container } from '@mui/material';
import BoardsList from '../components/boardsList';
import returnToHomeNotLoginUser from '../lib/returnToHomeNotLoginUser';

function Boards() {
  returnToHomeNotLoginUser();

  return (
    <Container>
      <Box sx={{ paddingTop: '210px' }}>
        <BoardsList />
      </Box>
    </Container>
  );
}

export default Boards;
