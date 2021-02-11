import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const font = "'Cabin', sans-serif";

// const breakpoints = createBreakpoints({});

function pxToRem(value) {
  return `${value / 16}rem`;
}

const themeLight = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: font,
      subtitle1: {
        lineHeight: pxToRem(24),
      },
    },
    palette: {
      background: {
        default: '#e4f0e2',
      },
    },
  }),
);

const themeDark = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: font,
      subtitle1: {
        lineHeight: pxToRem(24),
      },
    },
    palette: {
      background: {
        default: '#222222',
      },
      text: {
        primary: '#ffffff',
      },
    },
  }),
);

export const themes = {
  light: themeLight,
  dark: themeDark,
};
