import { Box, Container } from '@mui/material';
import BoardsList from '../components/boardsList';

function Boards() {

  return (
    <Container>
      <Box sx={{ paddingTop: '210px' }}>
        <BoardsList />
      </Box>
    </Container>
  );
}

export default Boards;
