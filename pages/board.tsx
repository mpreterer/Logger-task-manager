import { Box } from '@mui/material';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import ColumnCard from '../components/columnCard';
import useStore from '../hooks/useStore';
import { useAuth } from '../services/AuthProvider';

const Board = observer(() => {
  const isLoginIn = useAuth();
  const router = useRouter();
  const { boards } = useStore();

  useEffect(() => {
    const { id } = router.query;

    if(!router.isReady) return;
    
    if(id) {
      boards.getActiveBoard(`${id}`);
    }
  }, [router.isReady])

  if(isLoginIn) {
    return (
      <Box
        sx={{
          display: 'flex',
          gap: '41px',
          alignItems: 'flex-start',
          padding: '42px 66px',
          overflowX: 'auto',
          height: 'calc(100vh - 56px)',
          '&::-webkit-scrollbar': {
            width: '15px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#A6AAAC',
            borderRadius: '40px',
          },
        }}
      >
        {boards.activeBoard?.lists?.map(list => {
          return <ColumnCard previewCards={list.cards} title={list.name} key={list.id} />;
        })}
    </Box>
  );
}

  return <>Loading...</>;
});

export default Board;
