import { Box, Container } from '@mui/material';

import LoginButton from '../components/loginButton';
import authorization from '../states/authorization';
import ProfileCard from '../components/profileCard';
import UserAvatar from '../components/avatar';

import profile from '../states/profile';

function Account() {
  if (authorization.isLogin) {
    profile.getData();

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
