import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6c4ded', // accent
    },
    background: {
      default: '#07041c',
      paper: '#1b123a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b8aaff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Inter, sans-serif',
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '20px',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
          },
        },
      },
    },
  },
});

export default theme;
