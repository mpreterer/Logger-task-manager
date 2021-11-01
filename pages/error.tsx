import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

function Error() {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 49px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        color="#FFFFFF"
        fontWeight={500}
        fontSize={44}
        line-height={52}
      >
        Hmm... something went wrong :(
      </Typography>
      <Link href="/">
        <Button variant="contained"
          sx={{ 
            width: '226px',
            height: '49px',
            mt: '20px',
            fontSize: '20px',
            letterSpacing: '0.75px',
            backgroundColor: '#4E97C2'
          }}
        >
          Go to homepage
        </Button>
      </Link>
    </Box>
  );
}

export default Error;
