import { AppBar, Button, Box, Toolbar } from '@mui/material';
import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import UserAvatar from './avatar';

const Header = () => {
  return (
    <AppBar position="static" sx={{ height: '49px' }}>
      <Toolbar variant="dense" sx={{ gap: '4px' }}>
        <Link href="/">
          <Button variant="contained">
            <HomeOutlinedIcon />
          </Button>
        </Link>
        <Link href="/boards">
          <Button variant="contained">Boards</Button>
        </Link>
        <Link href="/creating-board">
          <Button variant="contained">Creating board</Button>
        </Link>
        <Box sx={{ marginLeft: 'auto' }}>
          <UserAvatar size="mini" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
