import { observer } from 'mobx-react';
import { Avatar } from '@mui/material';
import { useContext } from 'react';

import StorageContext from '../context/storageContext';

const UserAvatar = observer(({ size }: { size?: string }) => {
  const storage = useContext(StorageContext);

  let avatarSize: { height: string; width: string };
  switch (size) {
    case 'mini':
      avatarSize = { height: '41px', width: '41px' };
      break;
    default:
      avatarSize = { height: '140px', width: '140px' };
  }

  const avatarUrl =
    typeof process.env.TRELLO_TOKEN !== 'undefined' ? storage.profile.avatarUrl : '';

  return <Avatar alt={storage.profile.fullName} src={avatarUrl} sx={avatarSize} />;
});

export default UserAvatar;
