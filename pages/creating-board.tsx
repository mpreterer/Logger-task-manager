import { observer } from 'mobx-react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

import CreatingBoardCard from '../components/creatingBoardCard';

const CreatingBoard = observer(() => {
  return (
    <Container>
      <Box sx={{ paddingTop: '35px', width: '420px' }}>
        <CreatingBoardCard />
      </Box>
    </Container>
  );
})

export default CreatingBoard;