import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import LogoMobile from "./assets/logoMobile.png";
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#fff",
        height: "50px"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    drawerNav: {
        textDecoration: 'none',
        color: '#2B879E',
        fontSize: "16px"
    },
    logoLink: {
        backgroundImage: `url(${LogoMobile})`,
        backgroundRepeat: "no-repeat",
        height: "51px",
        marginTop: "10px"
      }
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar >
                    <Typography variant="h6" noWrap className={classes.title}>
                        <Link variant="button" to="/"><div className={classes.logoLink}></div>
                        </Link>
                    </Typography>
                    <IconButton

                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        style={{color: "#2B879E"}}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose} style={{color: "#2B879E" }}>
                        {theme.direction === 'rtl' ? <CloseIcon /> : <CloseIcon />}
                    </IconButton>
                </div>
                {/* <Divider /> */}
                <List onClick={handleDrawerClose}>
                    {[
                        <Link className={classes.drawerNav} to="/">Home</Link>,
                        <Link className={classes.drawerNav} to="/Services">Services</Link>,
                        <Link className={classes.drawerNav} to="/Pricing">Pricing</Link>,
                        <Link className={classes.drawerNav} to="/Team">Team</Link>,
                        <Link className={classes.drawerNav} to="/Contact">Contact</Link>].map((text, index) => (
                            <ListItem button key={text}>
                                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                </List>
                {/* <Divider /> */}
            </Drawer>
        </div>
    );
}