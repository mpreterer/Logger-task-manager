import Link from 'next/link';
import { Button } from '@mui/material';

const LoginButton = () => {
  const trelloLogin = `https://trello.com/1/authorize?response_type=token&key=${process.env.NEXT_PUBLIC_TRELLO_KEY}&return_url=http://localhost:3000/trello/auth&callback_method=fragment&scope=read,write&expiration=never&name=Logger`;

  return (
    <Link href={trelloLogin}>
      <Button variant="contained">Authorization</Button>
    </Link>
  );
};

export default LoginButton;
