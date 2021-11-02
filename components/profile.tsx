import { observer } from 'mobx-react';
import { Typography, Card, CardContent } from '@mui/material';
import { useEffect } from 'react';

import useStore from '../hooks/useStore';

const Profile = observer(() => {
  const { user } = useStore();

  useEffect(() => {
    const { activeUser } = user;

    if (!activeUser) {
      user.getUser();
    }
  }, []);

  return (
    <>
      <Typography sx={{ fontSize: '36px', lineHeight: '42px', color: '#FFF9F9;' }}>
        {user.activeUser?.fullName}
      </Typography>
      <Typography
        sx={{ fontSize: '32px', lineHeight: '37px', color: '#FFFFFF', marginTop: '35px' }}
      >
        Boards: {user.activeUser?.idBoards.length}
      </Typography>
      <Card sx={{ height: 190, marginTop: '35px' }}>
        <CardContent sx={{ fontSize: '20px', lineHeight: '23px', color: '#707070' }}>
          {user.activeUser?.bio}
        </CardContent>
      </Card>
    </>
  );
});

export default Profile;
