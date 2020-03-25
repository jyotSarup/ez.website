import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Grid, Typography, Container, makeStyles } from '@material-ui/core';
import PricingImg from "./assets/pricing.jpg";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  outContainer: {
    position: "relative",
    zIndex: "0",
    paddingBottom: "60px"
  },
  cardHeader: {
    backgroundColor: '#2B879E',
    color: 'white',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: "20px",
    marginBottom: "25px",
  },
  wrap: {
    backgroundImage: `url(${PricingImg})`,
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
  link: {
    margin: theme.spacing(1, 3),
    textDecoration: 'none',
    color: '#2B879E',
    fontWeight: "bold",
    textTransform: "capitalize",
    display: "block",
    width: "100%"
  },
  descCard: {
    textAlign: "center",
    padding: "8px 0px",
    borderBottom: "1px solid #2B879E",
    width: "85%",
    margin: "auto"
  }
}));

const tiers = [
  {
    title: 'Free Trial',
    price: '0',
    description: [
      '5 users included',
      '2 GB of storage',
      'Email support',
      '1 Email account'],
  },
  {
    title: 'Basic',
    subheader: 'Most popular',
    price: '15',
    description: [
      '10 users included',
      '20 GB of storage',
      'Priority email support',
      '10 Email accounts',
    ],
  },
  {
    title: 'Pro',
    price: '30',
    description: [
      '30 users included',
      '50 GB of storage',
      'Phone & email support',
      '30 Email accounts',
    ],
  },
  {
    title: 'Custom',
    price: '50',
    description: [
      'Unlimited users',
      '200 GB of storage',
      'Phone & email support',
      'Unlimited Email',
    ],
  },
];


export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.outContainer}>
        <div className={classes.wrap} >
          <Typography variant="h4">PRICING</Typography>
          <Typography variant="subtitle1">Plans for all companies <br /> Choose the best for your business</Typography>
        </div>

        <div>
          <Container width="85%" maxWidth="xl" component="main">
            <Grid container spacing={3} alignItems="center">
              {tiers.map(tier => (
                <Grid item key={tier.title} xs={12} sm={6} md={6} lg={3} xl={3}>
                  <Card style={{ border: "1px solid #2B879E" }}>
                    <CardHeader
                      title={tier.title}
                      titleTypographyProps={{ align: 'center', variant: "h5" }}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                          /mo
                    </Typography>
                      </div>
                      <ul>
                        {tier.description.map(line => (
                          <Typography className={classes.descCard} component="li" variant="body1" align="center" key={line} color="textPrimary">
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                      <CardActions>
                        <Button style={{ width: "175px", margin: "15px auto", border: "1px solid #2B879E" }} color="primary">
                          <Link variant="button" href="#" className={classes.link} to="/Contact">
                            Contact Us
                        </Link>
                        </Button>
                      </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}

// References: Material UI - https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/pricing