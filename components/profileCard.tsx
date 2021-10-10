import { observer } from 'mobx-react';
import { Typography, Card, CardContent } from '@mui/material';

import profile from '../states/profile';

const ProfileCard = observer(() => (
  <>
    <Typography variant="h4">{profile.fullName}</Typography>
    <Typography variant="h5">
      Boards:&#160;
      {profile.countBoards}
    </Typography>
    <Card sx={{ height: 190 }}>
      <CardContent>{profile.bio}</CardContent>
    </Card>
  </>
));

export default ProfileCard;
