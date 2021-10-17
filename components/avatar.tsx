import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';
import { useContext } from 'react';

import StorageContext from '../context/storageContext';
import useStore from '../hooks/useStore';

const UserAvatar = observer(({ size }: { size?: string }) => {
  const { user } = useStore();

  let avatarSize: { height: string; width: string };
  switch (size) {
    case 'mini':
      avatarSize = { height: '41px', width: '41px' };
      break;
    default:
      avatarSize = { height: '140px', width: '140px' };
  }

  const avatarUrl = user.user?.avatarUrl;

  return <Avatar alt={user.user?.fullName} src={avatarUrl + '/170.png'} sx={avatarSize} />;
});

export default UserAvatar;
