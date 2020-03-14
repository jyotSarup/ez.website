import { createMuiTheme } from '@material-ui/core/styles';

import { cyan, grey, red } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: {
      main: "#ffffff"
    }
  },
  status: {
    danger: red,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  },
});

  export default theme;

