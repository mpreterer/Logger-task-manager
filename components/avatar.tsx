import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';

import profile from '../states/profile';

const UserAvatar = observer(() => <Avatar alt={profile.fullName} src={profile.avatarUrl} />);

export default UserAvatar;
