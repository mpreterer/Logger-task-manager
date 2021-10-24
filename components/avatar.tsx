import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';

const UserAvatar = observer(({ size, avatarUrl, name }: { size?: string; avatarUrl: string; name: string; }) => {

  let avatarSize: { height: string; width: string };
  switch (size) {
    case 'mini':
      avatarSize = { height: '41px', width: '41px' };
      break;
    default:
      avatarSize = { height: '140px', width: '140px' };
  }

  return <Avatar alt={name} src={avatarUrl + '/170.png'} sx={avatarSize} />;
});

export default UserAvatar;
