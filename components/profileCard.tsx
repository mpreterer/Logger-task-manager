import { observer } from 'mobx-react';
import { Typography, Card, CardContent } from '@mui/material';

const ProfileCard = observer(({ profile }) => (
  <>
    <Typography>{profile.fullName}</Typography>
    <Typography>Boards: {profile.countBoards}</Typography>
    <Card>
      <CardContent>{profile.bio}</CardContent>
    </Card>
  </>
));

export default ProfileCard;
