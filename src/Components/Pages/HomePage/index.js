import React from "react";
import { Button, makeStyles, Grid, Container, Typography } from '@material-ui/core';
import heroImage from "./assets/home-hero-image.jpg";
import CircularImageCard from "../../Layout/CircularImageCard";
import BackImg from "./assets/backImg.png";
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  wrap: {
    backgroundImage: `url(${heroImage})`,
    height: "48vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    paddingTop: "10vh",
  },
  backImg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "66vh",
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    zIndex: "-1",
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    width: "100%",
  },
  outContainer: {
    position: "relative",
    zIndex: "0",
    paddingBottom: "40px",
  },
  homeContentGrid: {
    display: "grid"
  }
}));

export default function HomePage() {
  const classes = useStyles();

  const homepageServicesCard = [
    {
      title: "Dashboard",
      detail: "Visualize data about the sales over time",
      imgThumb: "Home_dashboard_Icon.svg"
    },
    {
      title: "Listings",
      detail: "Easily and quickly manage your listings",
      imgThumb: "Home_listings_icon.svg"
    },
    {
      title: "Realtors",
      detail: "Manage your realtors individually",
      imgThumb: "Home_realtors_icon.svg"
    }
  ];

  return (
    <div id="home">
      <div className={classes.root}>
        <div className={classes.outContainer}>
          <div className={classes.wrap}>


            <Typography variant="h4">EASY REALTY SYSTEM</Typography>

            <Typography variant="subtitle1">A data-driven responsive web platform for real estate companies</Typography>

            <br></br>

            <Button variant="contained" color="primary" href="#contained-buttons" style={{ width: "197px", textTransform: "capitalize", fontWeight: "bold" }}>
              <Link className={classes.link} to="/Pricing">Get Started</Link>
            </Button>

          </div>

          <Container className={classes.homeContentGrid} component="main" width="85%" style={{ textAlign: "center", color: "#2B879E", paddingTop: "40px" }}>

            <div className={classes.homeContentHeading}>

              <Typography variant="h4">Manage Realty System</Typography>

              <Typography variant="body2" color="textPrimary" style={{ width: "80%", margin: "Auto", paddingBottom: "30px" }}> The system will help small and medium real estate organizations to manage the core operations of their business which includes adding and
              updating the listings and realtors, and also will provide a data
            visualization of crucial company statistics.</Typography>
            </div>

            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={4}
              style={{ width: "100%", margin: "auto", textAlign: "-webkit-center" }}
            >
              {homepageServicesCard.map(item => (
                <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
                  <CircularImageCard
                    key={item.title}
                    title={item.title}
                    detail={item.detail}
                    imgThumb={item.imgThumb}
                  ></CircularImageCard>
                </Grid>
              ))}
            </Grid>
          </Container>
          <div className={classes.backImg}></div>
        </div>
      </div>
    </div>
  );
}
