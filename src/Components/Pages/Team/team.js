import React from "react";
import { makeStyles, Grid, Typography } from '@material-ui/core';
import TeamImg from "./assets/team.jpg";
import CircularImageCard from "../../Layout/CircularImageCard";
import LogoTeam from "./assets/LogoTeam.png";
import { useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        position: "relative",
    },
    wrap: {
        backgroundImage: `url(${TeamImg})`,
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
    teamLogo:{
        backgroundImage: `url(${LogoTeam})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        textAlign: "center",
        width: "100%",
        height: "65px"
    }
});

export default function Team() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const teamCard = [
        {
            title: "Heloysa",
            link: "heloysa-guerreiro",
            detail: "PM and Front-end Developer",
            info: '"My experience includes 6 years working as Business Analyst and Project Manager. In the last 2 years, I’ve been dedicated to gaining in-deep knowledge of systems development."',
            imgThumb: "heloysa.jpg"
        },
        {
            title: "Walter",
            link: "wbgneto",
            detail: "Lead Full Stack Developer",
            info: '"I love to build products, acting strongly in the technical area, which is my specialization, but also in the whole business structure. I am passionate about giving great user experiences to clients."',
            imgThumb: "walter.jpg"
        },
        {
            title: "Jyot",
            link: "jyotsarupkaur",
            detail: "Front-end Developer",
            info: '"I am a web and mobile application developer with 3+ years of industry experience. I am in this industry because I have always had keen interest in critical thinking and analysis. My goal is to keep doing this by developing business solutions."',
            imgThumb: "jyot.jpg"
        },
        {
            title: "Zeinab",
            link: "nazaninahmadi",
            detail: "Backend Developer",
            info: '"I started my professional journey 8 years ago by computer networking and running servers, in between I implemented an ERP system and got familiar with Databases. Now I am a junior web application developer."',
            imgThumb: "zeinab.jpg"
        },
        {
            title: "Saebom",
            link: "saebompak",
            detail: "Front-end Developer",
            info: '"Familiar with writing HTML5, CSS and front-end development technologies such as jQuery, Bootstrap and have related project experience. I am passionate about mycraft."',
            imgThumb: "saebom.jpg"
        },
        {
            title: "Saebeyol",
            link: "saebyeolpak",
            detail: "Front-end Developer",
            info: '"I worked as a UI designer for three years and experienced projects using HTML, CSS and jQuery. I love to learn new technology and keep track of lessons learned!"',
            imgThumb: "saebyeol.jpg"
        },
        {
            title: "Sweera",
            link: "sweerachahal",
            detail: "Front-end Developer",
            info: '"I graduated as a Computer Science Engineer from India and decided to follow my passion of front end development in my higher studies. I love learning about new technologies and creating web applications from a scratch."',
            imgThumb: "sweera.jpg"
        },
        {
            title: "Harry",
            link: "harryvtran",
            detail: "Lead UI/UX Designer",
            info: '"I graduated with Degree of Information Technology and have experience working in business (Pharmacy, houseware). I enjoy designing and have an open mindset to learn and to contribute to the team."',
            imgThumb: "harry.jpg"
        },
        {
            title: "Anukampa",
            link: "anukampa-sharma",
            detail: "UI/UX Designer",
            info: '"I had completed my bachelor’s degree in Computer Science & Engineering. Currently I’m pursuing web and mobile application designing Course."',
            imgThumb: "anukampa.jpg"
        },
        {
            title: "Kuldeeep",
            link: "kuldeep-bhangu",
            detail: "UI Designer",
            info: '"I have done my bachelor\'s in Computer Applications. I enjoy spending my time on designing and always have a positive and flexible attitude towards others. In this project, my contribution as UX and UI designer."',
            imgThumb: "kuldeep.jpg"
        },

    ];

    return (

        <div className={classes.root}>
            <div className={classes.wrap}>
                <Typography variant="h4">TEAM PARROT</Typography>
                <Typography variant="subtitle1">The minds behind this project</Typography>
            </div>
            <div className={classes.teamLogo}></div>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={4}
                style={{ width: "85%", margin: "auto", textAlign: "-webkit-center", alignItems: "start", paddingBottom: "40px" }}
            >
                {teamCard.map(item => (
                    <Grid item key={item.title} xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: "10px" }}>
                        <CircularImageCard
                            title={item.title}
                            detail={item.detail}
                            info={item.info}
                            link={item.link}
                            imgThumb={item.imgThumb}
                        ></CircularImageCard>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
}