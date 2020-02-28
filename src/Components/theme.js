import { createMuiTheme } from '@material-ui/core/styles';

import { cyan, grey, red } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
      primary: cyan,
      secondary: grey,
      background: red,
      action: {
        active: cyan,
      },
    },
  });

  export default theme;

