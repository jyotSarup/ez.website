import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import heroImage from "./assets/home-hero-image.png";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CircularImageCard from "../../Layout/CircularImageCard";
import Footer from "../../Layout/footer";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiCardMedia: {
      // Name of the rule
      text: {
        // Some CSS
        borderRadius: "50%"
      }
    }
  }
});

function HomePage() {
  const classes = useStyles();

  const homepageServicesCard = [
    {
      title: "Dashboard",
      detail: "Visualize your business/sales data",
      imgThumb: "Home_dashboard_Icon.svg"
    },
    {
      title: "Listings",
      detail: "Manage your listings easily",
      imgThumb: "Home_listings_icon.svg"
    },
    {
      title: "Realtors",
      detail: "Manage your employee and their data more efficiently",
      imgThumb: "Home_realtors_icon.svg"
    }
  ];

  return (
    <div className={classes.HomeBody}>
      <div className={classes.wrap} >
        <div className={classes.wrapContent}>
        <h1>EASY REALTY SYSTEMS</h1>
        <p>
          A data-driven and responsive web solution which <br /> serves as
          solution for real estate industry
        </p>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Get Started
        </Button>
        </div>
      </div>
      <Container className={classes.homeContentGrid} component="main" style={{textAlign:"center", color:"#00bcd4"}}>
        <div className={classes.homeContentHeading}>
        <h1>Manage Realty Systems</h1>
        <p style={{color:'#000' ,width:"50%", margin:"Auto"}}>
          The system will help small/medium real estate organizations to manage the core operations of the business
          which includes adding and updating the listings and realtors, and also will provide a data visualization of 
          crucial company statistics.
        </p>
          </div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={5}
        style={{width:"95%", margin:"auto" }}
      >
        {homepageServicesCard.map(item => (
          <CircularImageCard
            key={item.title}
            title={item.title}
            detail={item.detail}
            imgThumb={item.imgThumb}
          ></CircularImageCard>
        ))}
      </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  wrap: {
    backgroundImage: `url(${heroImage})`,
    height: "40vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    padding: "auto",
  },
  wrapContent:{
    display:"grid",
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  HomeBody: {
    display : "flex",
    flexDirection: "column",
    
  },
  homeContentGrid:{
    display:"grid",
  },
  
});

export default HomePage;
