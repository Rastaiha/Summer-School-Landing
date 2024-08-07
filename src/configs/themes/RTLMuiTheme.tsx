import { createTheme } from "@mui/material/styles";
import { Workshop } from "./MuiVariables";
import theme from "./theme";
import typography from "./typography";

import iranyekanwebbold from "../fonts/iranyekanwebbold.woff";
import iranyekanwebbold2 from "../fonts/iranyekanwebbold.woff2";
import iranyekanweblight from "../fonts/iranyekanweblight.woff";
import iranyekanweblight2 from "../fonts/iranyekanweblight.woff2";
import CactusCircleDots from "../fonts/CactusCircleDots.woff";
import CactusCircleDots2 from "../fonts/CactusCircleDots.woff2";
import IRANSansXRegular from "../fonts/IRANSansXRegular.woff";
import IRANSansXRegular2 from "../fonts/IRANSansXRegular.woff2";
import PelakBlack from "../fonts/Pelak-Black.woff";
import PelakBlack2 from "../fonts/Pelak-Black.woff2";
import VIPCartoon from "../fonts/VIPCartoon.woff";
import VIPCartoon2 from "../fonts/VIPCartoon.woff2";

const RTLMuiTheme = createTheme({
  direction: "rtl",
  ...theme(Workshop),
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: iranyekanwebbold;
        src: url(${iranyekanwebbold}) format("woff"), url(${iranyekanwebbold2}) format("woff2");
        font-weight: 900;
      }
      @font-face {
        font-family: iranyekan;
        src: url(${iranyekanweblight}) format("woff"), url(${iranyekanweblight2}) format("woff2");
        font-weight: 900;
      }
      @font-face {
        font-family: VIP Cartoon;
        src: url(${VIPCartoon}) format("woff"), url(${VIPCartoon2}) format("woff2");
        font-weight: 900;
      }
      @font-face {
        font-family: iranyekanwebbold;
        src: url(${iranyekanwebbold}) format("woff"), url(${iranyekanwebbold2}) format("woff2");
        font-weight: 900;
      }
      @font-face {
        font-family: IRANSansX;
        src: url(${IRANSansXRegular}) format("woff"), url(${IRANSansXRegular2}) format("woff2");
      }
      @font-face {
        font-family: PelakFontMainTitle;
        src: url(${PelakBlack}) format("woff"), url(${PelakBlack2}) format("woff2");
      }
      @font-face {
        font-family: CactusCircleDots;
        src: url(${CactusCircleDots}) format("woff"), url(${CactusCircleDots2}) format("woff2");
      }`,
    },
  },
});

export default RTLMuiTheme;
