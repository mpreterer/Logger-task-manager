import { Box, Container } from '@mui/material';

import LoginButton from '../components/loginButton';
import ProfileCard from '../components/profileCard';
import UserAvatar from '../components/avatar';
import StorageContext from '../context/storageContext';
import { useEffect, useContext } from 'react';

function Account() {
  const storage = useContext(StorageContext);

  useEffect(() => {
    const hash: string = window.location.hash;
    if (hash !== '') {
      process.env.TRELLO_TOKEN = hash.slice(7);
    }
  });

  if (typeof process.env.TRELLO_TOKEN !== 'undefined') {
    storage.profile.getData();

    return (
      <Container>
        <Box sx={{ display: 'flex', gap: '19px', marginTop: '177px' }}>
          <UserAvatar />
          <Box width={380}>
            <ProfileCard />
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
