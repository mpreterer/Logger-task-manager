import { observer } from 'mobx-react';
import { Button } from '@mui/material';
import Link from 'next/link';
import authorization from '../states/authorization';

const LoginButton = observer(() => (
  <Link href="/">
    <Button variant="contained" onClick={() => authorization.login()}>
      Authorization
    </Button>
  </Link>
));

export default LoginButton;
