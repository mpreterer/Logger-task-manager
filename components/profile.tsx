import { observer } from 'mobx-react';
import { Typography, Card, CardContent } from '@mui/material';
import { useContext } from 'react';

import StorageContext from '../context/storageContext';
import useStore from '../hooks/useStore';

const Profile = observer(() => {
  const { user } = useStore();

  return (
    <>
      <Typography sx={{ fontSize: '36px', lineHeight: '42px', color: '#FFF9F9;' }}>
        {user.user?.fullName}
      </Typography>
      <Typography
        sx={{ fontSize: '32px', lineHeight: '37px', color: '#FFFFFF', marginTop: '35px' }}
      >
        Boards: {(user.user?.idBoards)?.length}
      </Typography>
      <Card sx={{ height: 190, marginTop: '35px' }}>
        <CardContent sx={{ fontSize: '20px', lineHeight: '23px', color: '#707070' }}>
          {user.user?.bio}
        </CardContent>
      </Card>
    </>
  );
});

export default Profile;
