import React from 'react';
import Button from '@material-ui/core/Button';
import HomeStyles from './homePage-styles';

function HomePage() {
    const classes = HomeStyles();
    return (
        <div className="wrap">

            <h2 className={classes.title}>Homepage content</h2>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>

        </div>
    );
}

export default HomePage;
