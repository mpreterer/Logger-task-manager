import { Box, Container } from '@mui/material';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import LoginButton from '../components/loginButton';
import Profile from '../components/profile';
import UserAvatar from '../components/avatar';

function Account() {
  const router = useRouter();

  useEffect(() => {
    const hash: string = window.location.hash;
    if (hash !== '') {
      process.env.TRELLO_TOKEN = hash.slice(7);
      router.push('/');
    }
  });

  if (typeof process.env.TRELLO_TOKEN !== 'undefined') {
    return (
      <Container>
        <Box sx={{ display: 'flex', gap: '19px', marginTop: '177px' }}>
          <UserAvatar />
          <Box width={380}>
            <Profile />
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        height: 'calc(100vh - 49px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginButton />
    </Box>
  );
}

export default Account;
