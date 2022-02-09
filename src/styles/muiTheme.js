import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    background: {
      default: '#D6F2FF'
    },
    text: {
      primary: '#1B365C',
      secondary: '#3061A6',
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
      'Mukta',
      'Bebas Neue',
      'Anton'
    ].join(','),
    fontSize: 12,
    h1: {
      fontFamily: 'Bebas Neue',
    },
    h2: {
      fontFamily: 'Bebas Neue',
    },
    h3: {
      fontFamily: 'Bebas Neue',
    },
    button: {
      fontFamily: 'Anton'
    }
  },
});

export default muiTheme;