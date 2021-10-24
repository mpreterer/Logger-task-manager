import { observer } from 'mobx-react-lite';
import { Box, Container } from '@mui/material';

import AuthService from '../services/trello/AuthService';
import LoginButton from '../components/loginButton';
import Profile from '../components/profile';
import UserAvatar from '../components/avatar';
import useStore from '../hooks/useStore';

function Account() {
  const { user } = useStore();

  if (AuthService.isLogin()) {
    return (
      <Container>
        <Box sx={{ display: 'flex', gap: '19px', marginTop: '177px' }}>
          <UserAvatar
            fullName={user.user?.fullName}
            avatarUrl={user.user?.avatarUrl}
          />
          <Box width={380}>
            <Profile
              fullName={user.user?.fullName}
              bio={user.user?.bio}
              idBoards={user.user?.idBoards.length}
            />
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
