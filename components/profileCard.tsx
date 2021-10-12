import { observer } from 'mobx-react';
import { Typography, Card, CardContent } from '@mui/material';

import profile from '../states/profile';

const ProfileCard = observer(() => (
  <>
    <Typography sx={{ fontSize: '36px', lineHeight: '42px', color: '#FFF9F9;' }}>
      {profile.fullName}
    </Typography>
    <Typography sx={{ fontSize: '32px', lineHeight: '37px', color: '#FFFFFF', marginTop: '35px' }}>
      Boards: {profile.countBoards}
    </Typography>
    <Card sx={{ height: 190, marginTop: '35px' }}>
      <CardContent sx={{ fontSize: '20px', lineHeight: '23px', color: '#707070' }}>
        {profile.bio}
      </CardContent>
    </Card>
  </>
));

export default ProfileCard;
