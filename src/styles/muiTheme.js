import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#D6F2FF'
    },
    text: {
      primary: '#1B365C',
      secondary: '#1D4DFF',
    },
    primary: {
      light: '#73B2D9',
      main: '#323377',
      dark: '#0D2840'
    },
    secondary: {
      light: '#E4E6E7',
      main: '#BBC3C9',
      dark: '#6F7478'
    }
  },
  typography: {
    fontFamily: [
      'Bebas Neue',
      'Mukta',
      'Anton'
    ].join(','),
    fontSize: 12,
    h6: {
      fontFamily: 'Mukta',
    },
    button: {
      fontFamily: 'Anton'
    }
  },
});

export default theme;