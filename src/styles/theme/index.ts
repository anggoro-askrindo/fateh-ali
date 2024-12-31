import { createTheme } from '@mui/material/styles';
import { colors, fontFamily, screens } from './tokens'

const theme = createTheme({
  spacing: 4,   // 1 value number = 4px, default 8px
  breakpoints: {
    values: {
      ...screens
    }
  },
  palette: {
    primary: {
      main: colors.blue['500'], // Warna utama untuk tema
    },
    secondary: {
      main: colors.red['500'], // Warna sekunder untuk tema
    },
  },
  mixins: {
    toolbar: {
      height: 72    // header height, 1 = 8px spacing by default
    }
  },
  typography: {
    fontFamily: fontFamily.sans.join(','),  // Font default untuk tema,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
    fab: 1050,
    mobileStepper: 1000,
    modal: 1300,
    snackbar: 1400,
    speedDial: 1050,
    tooltip: 1500
  }
});

export default theme;
