import { Box, Button, Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import BoardsList from '../components/boardsList';
import useStore from '../hooks/useStore';

const Boards = observer(() => {
  const { boards } = useStore();

  useEffect(() => {
    return boards.resetCurrentCountBoard();
  }, []);

  useEffect(() => {
    boards.loadBoards();
  }, [boards.currentCountBoard]);

  return (
    <>
      <Container>
        <Box sx={{ paddingTop: '210px' }}>
          <BoardsList />
        </Box>
      </Container>
      {boards.currentCountBoard < boards.allCountBoard && boards.allCountBoard > 8 && (
        <Container sx={{ padding: '100px 0', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={() => {
              boards.increaseCurrentCountBoard();
            }}
          >
            show more
          </Button>
        </Container>
      )}
    </>
  );
});

export default Boards;
