import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4E97C2',
    },
    secondary: {
      main: '#026AA7',
    },
    background: {
      default: '#284968',
    },
    text: {
      primary: '#221C1D',
      secondary: '#fff',
    },
    info: {
      main: '#80B4D3',
    },
  },
  typography: {
    h1: {
      fontSize: '2.2rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.2rem',
    },
    h4: {
      fontSize: '1.7rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontFamily: 'Poppins',
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    button: {
      fontSize: '0.9rem',
      letterSpacing: '0.01em',
    },
  },
});
