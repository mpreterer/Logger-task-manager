import { observer } from 'mobx-react';
import { Button } from '@mui/material';

const LoginButton = observer(({ authorization }) => (
  <Button variant="contained" onClick={() => authorization.login()}>
    Authorization
  </Button>
));

export default LoginButton;
