import { observer } from 'mobx-react-lite';
import { Box, Button, Container } from '@mui/material';
import BoardsList from '../components/boardsList';
import useStore from '../hooks/useStore';

function Boards() {

  const { boards } = useStore();

  return (
    <Container>
      <Box sx={{ paddingTop: '210px' }}>
        <BoardsList />
      </Box>
    </Container>
  );
}

export default observer(Boards);
