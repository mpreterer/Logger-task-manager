import { observer } from 'mobx-react';
import { Typography, Card, CardContent } from '@mui/material';
import { useContext } from 'react';

import StorageContext from '../context/storageContext';

const ProfileCard = observer(() => {
  const storage = useContext(StorageContext);

  return (
    <>
      <Typography sx={{ fontSize: '36px', lineHeight: '42px', color: '#FFF9F9;' }}>
        {storage.profile.fullName}
      </Typography>
      <Typography
        sx={{ fontSize: '32px', lineHeight: '37px', color: '#FFFFFF', marginTop: '35px' }}
      >
        Boards: {storage.profile.countBoards}
      </Typography>
      <Card sx={{ height: 190, marginTop: '35px' }}>
        <CardContent sx={{ fontSize: '20px', lineHeight: '23px', color: '#707070' }}>
          {storage.profile.bio}
        </CardContent>
      </Card>
    </>
  );
});

export default ProfileCard;
