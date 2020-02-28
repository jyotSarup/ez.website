import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from '../useStyles';
import {
    Link
} from 'react-router-dom';

  
  export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper className={classes.root}>
        <Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={<Link className={classes.link} to="/">HOME</Link>} />
          <Tab label={<Link className={classes.link} to="/Services">SERVICES</Link>} />
          <Tab label={<Link className={classes.link} to="/Pricing">PRICING</Link>} />
          <Tab label={<Link className={classes.link} to="/Team">TEAM</Link>} />
          <Tab label={<Link className={classes.link} to="/Contact">CONTACT</Link>} />
          <Tab label="LOGIN" />
        </Tabs>
      </Paper>
    );
  }
