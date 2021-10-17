import { observer } from 'mobx-react-lite';
import { Box, Container } from '@mui/material';

import AuthService from '../services/trello/AuthService';
import LoginButton from '../components/loginButton';
import Profile from '../components/profile';
import UserAvatar from '../components/avatar';

function Account() {
  if (AuthService.isLogin()) {
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

export default observer(Account);
