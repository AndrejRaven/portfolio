import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    background: {
      default: '#2b3138',
      paper: '#23282E',
      darker: '#23282E'
    },
    text: {
      primary: '#DBDEE2',
      secondary: '#DBDEE2',
    },
    primary: {
      light: '#73B2D9',
      main: '#DBDEE2',
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
      fontFamily: 'Mukta',
    },
    h2: {
      fontFamily: 'Anton',
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