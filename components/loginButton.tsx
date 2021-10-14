import Link from 'next/link';
import { Button } from '@mui/material';

import storage from '../storage/storage';

const LoginButton = () => {
  return (
    <Link href="/">
      <Button variant="contained" onClick={() => storage.authorization.login()}>
        Authorization
      </Button>
    </Link>
  );
};

export default LoginButton;
