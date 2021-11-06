import { observer } from 'mobx-react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

import FormCreateBoard from '../components/formCreateBoard/formCreateBoard';

const CreatingBoard = observer(() => {
  return (
    <Container>
      <Box
        sx={{
          height: 'calc(100vh - 49px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormCreateBoard />
      </Box>
    </Container>
  );
});

export default CreatingBoard;
