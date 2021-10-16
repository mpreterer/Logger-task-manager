import { Box, Container } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import BoardsList from '../components/boardsList';
import StorageContext from '../context/storageContext';

function Boards() {
  const storage = useContext(StorageContext);
  const router = useRouter();

  useEffect(() => {
    if (typeof process.env.TRELLO_TOKEN === 'undefined') {
      router.push('/');
    }
  });

  if (typeof process.env.TRELLO_TOKEN !== 'undefined') {
    storage.boards.getData();

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
