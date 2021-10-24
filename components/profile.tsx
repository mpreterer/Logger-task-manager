import { observer } from 'mobx-react';
import { Typography, Card, CardContent } from '@mui/material';

const Profile = observer(({ fullName, idBoards, bio }: { fullName: string; idBoards: string; bio: string; }) => {

  return (
    <>
      <Typography sx={{ fontSize: '36px', lineHeight: '42px', color: '#FFF9F9;' }}>
        {fullName}
      </Typography>
      <Typography
        sx={{ fontSize: '32px', lineHeight: '37px', color: '#FFFFFF', marginTop: '35px' }}
      >
        Boards: {idBoards}
      </Typography>
      <Card sx={{ height: 190, marginTop: '35px' }}>
        <CardContent sx={{ fontSize: '20px', lineHeight: '23px', color: '#707070' }}>
          {bio}
        </CardContent>
      </Card>
    </>
  );
});

export default Profile;
