import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamImg from "./assets/team.png";
import { createMuiTheme, ThemeProvider, MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CircularImageCard from "../../Layout/CircularImageCard";

const theme = createMuiTheme({
    overrides: {
        MuiCardContent: {
            root: {
                backgroundColor: "#000",
            },
        },
    }
});

function Team() {
    const classes = useStyles();

    const teamCard = [
        {
            title: "Heloysa",
            detail: "PM and Front-end Developer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Walter",
            detail: "Lead Developer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Jyot",
            detail: "Full Stack Developer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Zeinab",
            detail: "Backend Developer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Sae Bom",
            detail: "Front-end Developer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Sae Beyol",
            detail: "Front-end Developer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Sweera",
            detail: "Front-end Developer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Harry",
            detail: "Lead Designer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Anukampa",
            detail: "Designer",
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Kuldeeep",
            detail: "Designer",
            imgThumb: "Team_icon.svg"
        },

    ];

    return (

        <div className={classes.HomeBody}>
            <div className={classes.wrap}>
                <div className={classes.wrapContent}>
                    <h1>TEAM PARROT</h1>
                    <p style={{ marginTop: "1px" }}>
                        The minds behind this project</p>
                </div>
            </div>
            <Container
                className={classes.homeContentGrid}
                component="main"
                maxWidth="90%"
                style={{ textAlign: "center", color: "#00bcd4" }}
            >
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    spacing={4}
                    style={{ width: "80%", margin: "auto" }}
                >
                    {teamCard.map(item => (
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
        backgroundImage: `url(${TeamImg})`,
        height: "25vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        textAlign: "center",
        color: "#fff",
        padding: "auto"
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
        flexDirection: "column"
    },
    homeContentGrid: {
        display: "grid",
        marginTop: "40px",
    },
});

export default Team;
