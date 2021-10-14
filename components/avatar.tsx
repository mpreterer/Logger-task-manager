import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';

import storage from '../storage/storage';

const UserAvatar = observer(({ size }: { size?: string }) => {
  let avatarSize: { height: string; width: string };
  switch (size) {
    case 'mini':
      avatarSize = { height: '41px', width: '41px' };
      break;
    default:
      avatarSize = { height: '140px', width: '140px' };
  }

  const avatarUrl = storage.authorization.isLogin ? storage.profile.avatarUrl : '';

  return <Avatar alt={storage.profile.fullName} src={avatarUrl} sx={avatarSize} />;
});

export default UserAvatar;
