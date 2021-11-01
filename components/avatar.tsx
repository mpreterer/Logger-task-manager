import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';

type props = {
  alt?: string;
  src?: string;
  size?: string;
};

const UserAvatar = observer(({ size, alt, src }: props) => {
  let avatarSize: { height: string; width: string };

  switch (size) {
    case 'mini':
      avatarSize = { height: '41px', width: '41px' };
      break;
    default:
      avatarSize = { height: '140px', width: '140px' };
      break;
  }

  return <Avatar alt={alt} src={src} sx={avatarSize} />;
});

export default UserAvatar;
