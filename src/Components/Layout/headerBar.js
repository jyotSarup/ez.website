import React from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Typography, makeStyles } from '@material-ui/core';
import Logo from "./assets/logo.png";
import { Link } from 'react-router-dom';


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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    backgroundColor: "#ffffff",
    height: "70px",
    width: "85%",
    margin: "auto",
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
    color: '#2B879E',
    fontSize: "16px",
    width: "100%"
  },
  button: {
    color: 'white',
    backgroundColor: '#2B879E',
    '&:hover': {
      background: "white",
      color: '#2B879E'
    },
    marginLeft: "24px",
  },
  logoLink: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    height: "51px",
  }
}));

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar style={{ marginTop: "3px" }}>
          <Typography noWrap className={classes.toolbarTitle}>
            <Link variant="button" to="/"><div className={classes.logoLink}></div>
            </Link>
          </Typography>
          <nav>
            <Link variant="subtitle1" className={classes.link} to="/Services">
              Services
            </Link>
            <Link variant="subtitle1" href="#" className={classes.link} to="/Pricing">
              Pricing
            </Link>
            <Link variant="button" href="#" className={classes.link} to="/Team">
              Team
            </Link>
            <Link variant="button" href="#" className={classes.link} to="/Contact">
              Contact
            </Link>
          </nav>
          <Button href="http://admin.easyrealtysystem.wmdd.ca/" color="primary" variant="outlined" className={classes.button}>
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}