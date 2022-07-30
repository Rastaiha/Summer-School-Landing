import { createTheme } from '@mui/material/styles';
import { Workshop } from './MuiVariables';
import theme from './theme';
import typography from './typography';
import iranyekanweblight from '../fonts/iranyekanweblight.woff';
import iranyekanweblight2 from '../fonts/iranyekanweblight.woff2';
import VIPCartoon from '../fonts/VIPCartoon.woff';
import VIPCartoon2 from '../fonts/VIPCartoon.woff2';

const RTLMuiTheme = createTheme({
  direction: 'rtl',
  ...theme(Workshop),
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: iranyekan;
        src: url(${iranyekanweblight}) format("woff"), url(${iranyekanweblight2}) format("woff2");
        font-weight: 100 900;
      }
      @font-face {
        font-family: VIP Cartoon;
        src: url(${VIPCartoon}) format("woff"), url(${VIPCartoon2}) format("woff2");
        font-weight: 100 900;
      }
      `,
    },
  },
});

export default RTLMuiTheme;
