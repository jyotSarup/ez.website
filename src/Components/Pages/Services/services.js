import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ServicesImg from "./assets/services.png";
import ServicesDashboard from "./assets/services_dashboard.png";
import ServicesListings from "./assets/services_listings.png";
import ServicesRealtors from "./assets/services_realtors.png";



const useStyles = makeStyles(theme => ({
  wrap: {
    backgroundImage: `url(${ServicesImg})`,
    height: "25vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    padding: "auto",
    marginBottom: "60px",
  },
  wrapContent: {
    display: "grid",
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  dashImg: {
    backgroundImage: `url(${ServicesDashboard})`,
    width: "100%",
    height: "250px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  listImg: {
    backgroundImage: `url(${ServicesListings})`,
    width: "100%",
    height: "250px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  realImg: {
    backgroundImage: `url(${ServicesRealtors})`,
    width: "100%",
    height: "250px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  titles: {
    textAlign: "center",
    color: '#00bcd4',
  }
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrap} >
        <div className={classes.wrapContent}>
          <h1>SERVICES</h1>
          <p>
            The best solutions for your Real State Business
        </p>
        </div>
      </div>
      <Grid container>
        <Grid item xs={6}>
          <h2 className={classes.titles}>Dashboard</h2>
          <div className={classes.dashImg}></div>
        </Grid>
        <Grid item xs={6}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar ligula vel justo pharetra ornare. Nullam sollicitudin molestie felis quis pulvinar. Nullam ut nunc at nulla pulvinar fringilla. Etiam porttitor vestibulum enim nec tincidunt. Morbi et libero augue. Donec a lacus eu sem eleifend tristique sit amet sed risus. Duis rhoncus, nulla sed rhoncus maximus, arcu leo dictum turpis, ac porta leo justo nec leo. Etiam non arcu semper, malesuada lorem nec, pharetra sapien. Integer id efficitur lectus. Nulla velit nisi, varius eget accumsan id, pellentesque ac justo. Sed porttitor commodo urna, sed efficitur eros commodo sed. Cras tincidunt felis id mauris auctor, at placerat tellus tempor. Etiam non lorem venenatis dui ultrices placerat vel sed purus.</p>
        </Grid>
      </Grid>
      <br></br>
      <Grid container>
        <Grid item xs={6}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar ligula vel justo pharetra ornare. Nullam sollicitudin molestie felis quis pulvinar. Nullam ut nunc at nulla pulvinar fringilla. Etiam porttitor vestibulum enim nec tincidunt. Morbi et libero augue. Donec a lacus eu sem eleifend tristique sit amet sed risus. Duis rhoncus, nulla sed rhoncus maximus, arcu leo dictum turpis, ac porta leo justo nec leo. Etiam non arcu semper, malesuada lorem nec, pharetra sapien. Integer id efficitur lectus. Nulla velit nisi, varius eget accumsan id, pellentesque ac justo. Sed porttitor commodo urna, sed efficitur eros commodo sed. Cras tincidunt felis id mauris auctor, at placerat tellus tempor. Etiam non lorem venenatis dui ultrices placerat vel sed purus.</p>
        </Grid>
        <Grid item xs={6}>
        <h2 className={classes.titles}>Listings</h2>
          <div className={classes.listImg}></div>
        </Grid>
      </Grid>
      <br></br>
      <Grid container>
        <Grid item xs={6}>
        <h2 className={classes.titles}>Realtors</h2>
          <div className={classes.realImg}></div>
        </Grid>
        <Grid item xs={6}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar ligula vel justo pharetra ornare. Nullam sollicitudin molestie felis quis pulvinar. Nullam ut nunc at nulla pulvinar fringilla. Etiam porttitor vestibulum enim nec tincidunt. Morbi et libero augue. Donec a lacus eu sem eleifend tristique sit amet sed risus. Duis rhoncus, nulla sed rhoncus maximus, arcu leo dictum turpis, ac porta leo justo nec leo. Etiam non arcu semper, malesuada lorem nec, pharetra sapien. Integer id efficitur lectus. Nulla velit nisi, varius eget accumsan id, pellentesque ac justo. Sed porttitor commodo urna, sed efficitur eros commodo sed. Cras tincidunt felis id mauris auctor, at placerat tellus tempor. Etiam non lorem venenatis dui ultrices placerat vel sed purus.</p>
        </Grid>
      </Grid>
    </div>
  );
}
