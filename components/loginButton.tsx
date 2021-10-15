import Link from 'next/link';
import { Button } from '@mui/material';

const LoginButton = () => {
  const trelloLogin = `https://trello.com/1/authorize?response_type=token&key=${process.env.NEXT_PUBLIC_TRELLO_KEY}&return_url=http%3A%2F%2F127.0.0.1:3000&callback_method=fragment&scope=read%2Cwrite%2Caccount&expiration=never&name=Crello`;

  return (
    <Link href={trelloLogin}>
      <Button variant="contained">Authorization</Button>
    </Link>
  );
};

export default LoginButton;
