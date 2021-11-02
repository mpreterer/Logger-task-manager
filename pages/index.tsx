import { observer } from 'mobx-react';
import { useEffect, useContext } from 'react';
import { Box, Container } from '@mui/material';

import { useAuth } from '../services/AuthProvider';
import LoginButton from '../components/loginButton';
import Profile from '../components/profile';
import UserAvatar from '../components/avatar';
import useStore from '../hooks/useStore';

const Account = observer(() => {
  const isLoginIn = useAuth();
  const { user } = useStore();

  useEffect(() => {
    if (isLoginIn) {
      const { activeUser } = user;

      if (!activeUser) {
        user.getUser();
      }
    }
  }, []);

  if (isLoginIn) {
    return (
      <Container>
        <Box sx={{ display: 'flex', gap: '19px', marginTop: '177px' }}>
          {isLoginIn && user.activeUser ? (
            <UserAvatar
              alt={user.activeUser.fullName}
              src={user.activeUser.avatarUrl + '/170.png'}
            />
          ) : (
            <UserAvatar />
          )}
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
});

export default Account;
