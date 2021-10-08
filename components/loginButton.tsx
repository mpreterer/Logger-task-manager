import { observer } from 'mobx-react';
import { Button } from '@mui/material';
import Link from 'next/link';

const LoginButton = observer(({ authorization }) => (
  <Link href="/">
    <Button variant="contained" onClick={() => authorization.login()}>
      Authorization
    </Button>
  </Link>
));

export default LoginButton;
