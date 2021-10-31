import { Box, Container } from '@mui/material';

import LoginButton from '../components/loginButton';
import Profile from '../components/profile';
import UserAvatar from '../components/avatar';
import { useAuth } from '../services/AuthProvider';

function Account() {
  const isLoginIn = useAuth();

  if (isLoginIn) {
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
