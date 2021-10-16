import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import HomeIcon from '../public/images/svg/home.svg';
import BoardsIcon from '../public/images/svg/boards.svg';
import LogoIcon from '../public/images/svg/logo.svg';
import UserAvatar from './avatar';

const Header = () => {
  return (
    <AppBar position="static" sx={{ height: '49px', backgroundColor: '#026AA7' }}>
      <Toolbar variant="dense" sx={{ gap: '4px' }}>
        <Link href="/">
          <Button variant="contained" sx={{ width: '41px', height: '41px', boxSizing: 'border-box', padding: '0', backgroundColor: '#284968' }}>
            <Image src={HomeIcon} width={17} height={19} alt="" />
          </Button>
        </Link>
        <Link href="/boards">
          <Button variant="contained" sx={{ display: 'flex', justifyContent: 'space-between', width: '160px', backgroundColor: '#4E97C2', textTransform: 'capitalize', fontSize: '20px', height: '41px', letterSpacing: 'normal' }}>
            <Image src={BoardsIcon} alt=""/>
            my boards
          </Button>
        </Link>
        <Link href="/creating-board">
          <Button variant="contained" sx={{ width: '142px', backgroundColor: '#4E97C2', textTransform: 'capitalize', fontSize: '20px', padding: '0', height: '41px', letterSpacing: 'normal' }}>create board</Button>
        </Link>
        <Box sx={{ display: 'flex', width: '46%', justifyContent: 'center'}}>
          <Image src={LogoIcon} alt=""/>
          <Typography component='h1' variant="h4" color='#80B4D3' fontStyle='italic' fontWeight={500} fontSize={38} line-height={45} >Crello</Typography>
        </Box>
        <Box sx={{ marginLeft: 'auto' }}>
          <UserAvatar size="mini" />
        </Box>
      </Toolbar>
    </AppBar >
  );
};

export default Header;
