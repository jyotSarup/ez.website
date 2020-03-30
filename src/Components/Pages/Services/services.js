import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ServicesImg from "./assets/services.jpg";
import ServicesDashboard from "./assets/services_dash.jpg";
import ServicesListings from "./assets/services_listings.jpg";
import ServicesRealtors from "./assets/services_realtors.jpg";
import ServicesBall1 from "./assets/services_ball1.png";
import ServicesBall2 from "./assets/services_ball2.png";
import ServicesBall3 from "./assets/services_ball3.png";
import { useEffect } from 'react';


const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  wrap: {
    backgroundImage: `url(${ServicesImg})`,
    height: "32vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    padding: "auto",
    marginBottom: "60px",
    paddingTop: "10vh",
  },
  wrapServices: {
    width: "85%",
    margin: "auto",
    paddingBottom: "60px",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    },
    maxWidth: "1480px"
  },
  dashImg: {
    height: "18vw",
    width: "32vw",
    minHeight: "169px",
    minWidth: "300px",
    maxWidth: "755px",
    maxHeight: "424px",
    backgroundImage: `url(${ServicesDashboard})`,
    borderRadius: "4px",
    boxShadow: "-2px 2px 5px #9B9A9A",
    marginLeft: "5px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "center",
      margin: "auto",
      marginBottom: "15px"
    }
  },
  listImg: {
    height: "18vw",
    width: "32vw",
    minHeight: "169px",
    minWidth: "300px",
    maxWidth: "755px",
    maxHeight: "424px",
    float: "right",
    backgroundImage: `url(${ServicesListings})`,
    borderRadius: "4px",
    boxShadow: "-2px 2px 5px #9B9A9A",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "contain",
    marginLeft: "-8px",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "center",
      margin: "auto",
      marginBottom: "15px",
      float: "none"
    }
  },
  realImg: {
    height: "18vw",
    width: "32vw",
    minHeight: "169px",
    minWidth: "300px",
    maxWidth: "755px",
    maxHeight: "424px",
    backgroundImage: `url(${ServicesRealtors})`,
    borderRadius: "4px",
    boxShadow: "-2px 2px 5px #9B9A9A",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    marginLeft: "5px",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "center",
      margin: "auto",
      marginBottom: "15px"
    }
  },
  titlesRight: {
    textAlign: "right",
    marginRight: "8px"
  },
  description: {
    margin: "auto",
  },
  outContainer: {
    position: "relative",
    zIndex: "0",
  },
  ball1: {
    position: "absolute",
    top: "460px",
    left: "0",
    width: "100%",
    height: "42vh",
    backgroundImage: `url(${ServicesBall1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      top: "300px",
    }
  },
  ball2: {
    position: "absolute",
    top: "830px",
    right: "0",
    width: "100%",
    height: "42vh",
    backgroundImage: `url(${ServicesBall2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "contain",
    zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      top: "700px",
    }
  },
  ball3: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "200px",
    backgroundImage: `url(${ServicesBall3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      height: '100px',
    },
    [theme.breakpoints.down('sm')]: {
      display: "none",
    }
  },
  smallGrid: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  largeGrid: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  leftImgs: {
    paddingRight: "30px",
    [theme.breakpoints.down('md')]: {
      paddingRight: "0",
    },
  }
}));

export default function Services() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  return (
    <div className={classes.root}>
      <div className={classes.outContainer}>
        <div className={classes.ball1}></div>
        <div className={classes.ball2}></div>
        <div className={classes.ball3}></div>
        <div className={classes.wrap} >
          <Typography variant="h4">SERVICES</Typography>
          <Typography variant="subtitle1">The best solutions for your Real State Business</Typography>
        </div>
        <div className={classes.wrapServices}>
          <Grid container>
            <Grid className={classes.leftImgs} item xs={12} sm={12} md={6} lg={6} xl={6} style={{paddingRight: "30px"}}>
              <Typography variant="h4" color="primary">Dashboard</Typography>
              <div className={classes.dashImg}></div>
            </Grid>
            <Grid className={classes.description} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="body2" color="textPrimary" >
                Find dinamic charts that to analyse your business over time:<br></br>
                - Sales by type of property<br></br>
                - Sales by realtor<br></br><br></br>

                And choose the metrics you want: <br></br>
                - Sales by quantity<br></br>
                - Sales by amount<br></br>
              </Typography>
            </Grid>
          </Grid>
          <br></br>
          <Grid container className={classes.largeGrid}>
            <Grid className={classes.description} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="body2" color="textPrimary" style={{maxWidth:"748px", paddingRight: "30px"}}>Manage your listings by exploring this feature:<br></br>
          - Add listings with all characteristics and photos<br></br>
          - Quiclky assign the listing to a realtor<br></br>
          - Manage the status of your listings: active, inactive, sold<br></br>
          - Easily edit and delete your listings<br></br>
          - Add your sales to automatically update your charts<br></br>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h4" color="primary" className={classes.titlesRight}>Listings</Typography>
              <div className={classes.listImg}></div>
            </Grid>
          </Grid>
          <br></br>
          <Grid container className={classes.smallGrid}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="h4" color="primary">Listings</Typography>
              <div className={classes.listImg}></div>
            </Grid>
            <Grid className={classes.description} item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body2" color="textPrimary" style={{maxWidth:"748px"}}>Manage your listings by exploring this feature:<br></br>
              - Add listings with all characteristics and photos<br></br>
              - Quiclky assign the listings to a realtor<br></br>
              - Manage the status of your listings: active, inactive, sold<br></br>
              - Easily edit and delete your listings<br></br>
              - Add your sales to automatically update your charts<br></br>
              </Typography>
            </Grid>
          </Grid>
          <br></br> <br></br>
          <Grid container>
            <Grid className={classes.leftImgs} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h4" color="primary">Realtors</Typography>
              <div className={classes.realImg}></div>
            </Grid>
            <Grid className={classes.description} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="body2" color="textPrimary" style={{maxWidth:"748px"}}>Manage your realtors efficiently by exploring this feature:<br></br>
              - Add realtors with their photo and information<br></br>
              - View houses assigned to a realtor<br></br>
              - Easily edit and delete realtors<br></br>
              - Quicly search a specific realtor in your list<br></br>
              - View all the information about your realtors<br></br>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
