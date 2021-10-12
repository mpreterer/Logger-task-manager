import Link from 'next/link';
import { Button } from '@mui/material';

import authorization from '../states/authorization';

const LoginButton = () => {
  return (
    <Link href="/">
      <Button variant="contained" onClick={() => authorization.login()}>
        Authorization
      </Button>
    </Link>
  );
};

export default LoginButton;
