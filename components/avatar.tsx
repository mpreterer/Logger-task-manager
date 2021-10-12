import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';

import profile from '../states/profile';
import authorization from '../states/authorization';

const UserAvatar = observer(({ size }: { size?: string }) => {
  let avatarSize: { height: string; width: string };
  switch (size) {
    case 'mini':
      avatarSize = { height: '41px', width: '41px' };
      break;
    default:
      avatarSize = { height: '140px', width: '140px' };
  }

  const avatarUrl = authorization.isLogin ? profile.avatarUrl : '';

  return <Avatar alt={profile.fullName} src={avatarUrl} sx={avatarSize} />;
});

export default UserAvatar;
