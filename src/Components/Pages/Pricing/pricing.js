import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PricingImg from "./assets/pricing.png";
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
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: '#2B879E',
    color: 'white',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  wrap: {
    backgroundImage: `url(${PricingImg})`,
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
  HomeBody: {
    display: "flex",
    flexDirection: "column",

  },
  homeContentGrid: {
    display: "grid",
  },
  link: {
    margin: theme.spacing(1, 3),
    textDecoration: 'none',
    color: '#2B879E',
  },
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Email support', '1 Email account'],
    buttonVariant: 'outlined',
  },
  {
    title: 'Basic',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Priority email support',
      '5 Email account',
    ],
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    price: '30',
    description: [
      '500 users included',
      '30 GB of storage',
      'Phone & email support',
      '10 Email account',
    ],
    buttonVariant: 'outlined',
  },
  {
    title: 'Custom',
    price: '50',
    description: [
      '100 users included',
      '200 GB of storage',
      'Phone & email support',
      '20 Email account',
    ],
    buttonVariant: 'outlined',
  },
];


export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.HomeBody}>
        <div className={classes.wrap} >
          <div className={classes.wrapContent}>
            <h1>PRICING</h1>
            <p>
              Plans for all companies <br /> Choose the best for your business
        </p>
          </div>
        </div>

        <div>
          <Container maxWidth="xl" component="main">
            <Grid container spacing={3} alignItems="center">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={12} md={6} lg={3} xl={3}>
                  <Card style={{border: "1px solid #2B879E"}}>
                    <CardHeader
                      title={tier.title}
                      //subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      //action={tier.title === 'Pro' ? <StarIcon /> : null}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          /mo
                    </Typography>
                      </div>
                      <ul>
                        {tier.description.map(line => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} color="primary">

                        <Link variant="button" color="textPrimary" href="#" className={classes.link} to="/Contact">
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