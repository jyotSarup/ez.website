import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link
} from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 3),
    textDecoration: 'none',
    color: '#00bcd4',
  },
  button: {
    color: 'white',
    backgroundColor: '#00bcd4',
  },
}));

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link variant="button" color="textPrimary" className={classes.link} to="/">
              HOME
            </Link>
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" className={classes.link} to="/Services">
              Services
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} to="/Pricing">
              Pricing
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} to="/Team">
              Team
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} to="/Contact">
              Contact
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.button}>
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}