import { Box, Container } from '@mui/material';

import LoginButton from '../components/loginButton';
import authorization from '../states/authorization';
import ProfileCard from '../components/profileCard';
import UserAvatar from '../components/avatar';

function HomePage() {
  if (authorization.isLogin) {
    return (
      <Container>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <UserAvatar />
          <Box width={380}>
            <ProfileCard />
          </Box>
        </Box>
      </Container>
    );
  }

  return <LoginButton />;
}

export default HomePage;
