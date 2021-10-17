import { Button } from '@mui/material';

import AuthService from '../services/trello/AuthService';

const LoginButton = () => {

  return (
    <Button variant="contained" onClick={AuthService.login}>Authorization</Button>
  );
};

export default LoginButton;
