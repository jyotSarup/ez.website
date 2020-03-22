import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import heroImage from "./assets/home-hero-image.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CircularImageCard from "../../Layout/CircularImageCard";
import BackImg from "./assets/backImg.png";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


function HomePage() {
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
    <div className={classes.root}>
      <div className={classes.outContainer}>
        <div className={classes.wrap}>


          <Typography variant="h4">EASY REALTY SYSTEMS</Typography>

          <Typography variant="subtitle1">A data-driven responsive web platform for real estate companies</Typography>

          <br></br>

          <Button variant="contained" color="primary" href="#contained-buttons" style={{ width: "200px", fontSize: "22px", textTransform: "capitalize", fontWeight: "bold" }}>
            <Link className={classes.link} to="/Pricing">Get Started</Link>
          </Button>

        </div>

        <Container className={classes.homeContentGrid} component="main" maxWidth="90%" style={{ textAlign: "center", color: "#2B879E", height: "67vh", paddingTop: "70px" }}>

          <div className={classes.homeContentHeading}>

            <Typography variant="h4">Manage Realty System</Typography>

            <Typography variant="body2" color="textSecondary" style={{ width: "80%", margin: "Auto", paddingBottom: "50px" }}> The system will help small/medium real estate organizations to
            manage the core operations of the business which includes adding and
            updating the listings and realtors, and also will provide a data
            visualization of crucial company statistics.</Typography>
          </div>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={4}
            style={{ width: "70%", margin: "auto", textAlign: "-webkit-center" }}
          >
            {homepageServicesCard.map(item => (
              <Grid item key={item.title} xs={12} sm={12} md={12} lg={3} xl={3}>
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
    </div >
  );
}


const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  wrap: {
    backgroundImage: `url(${heroImage})`,
    height: "52vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    paddingTop: "15vh",
  },
  // wrapContent: {
  //   display: "grid",
  //   margin: 0,
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   textAlign: "-webkit-center",
  // },
  HomeBody: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: "0"
  },
  homeContentGrid: {
    //display: "grid",
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
    color: '#ffffff'
  },
  outContainer: {
    position: "relative",
    zIndex: "0",
  },
});

export default HomePage;
