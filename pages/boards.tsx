import { Box, Container } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import BoardsList from '../components/boardsList';

function Boards() {
  const router = useRouter();

  useEffect(() => {
    if (typeof process.env.TRELLO_TOKEN === 'undefined') {
      router.push('/');
    }
  });

  if (typeof process.env.TRELLO_TOKEN !== 'undefined') {
    return (
      <Container>
        <Box sx={{ paddingTop: '210px' }}>
          <BoardsList />
        </Box>
      </Container>
    );
  }

  return <span>Redirecting...</span>;
}

export default Boards;
