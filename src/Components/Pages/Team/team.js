import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamImg from "./assets/team.png";
import Grid from "@material-ui/core/Grid";
import CircularImageCard from "../../Layout/CircularImageCard";
import Typography from '@material-ui/core/Typography';

export default function Team() {
    const classes = useStyles();

    const teamCard = [
        {
            title: "Heloysa",
            link: "heloysa-guerreiro",
            detail: "PM and Front-end Developer",
            info: '"My experience includes 6 years working as Business Analyst and Project Manager. In the last 2 years, I’ve been dedicated to gaining in-deep knowledge of systems development."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Walter",
            link: "wbgneto",
            detail: "Lead Developer",
            info: '"I love to build products, acting strongly in the technical area, which is my specialization, but also in the whole business structure. I am passionate about giving great user experiences to clients."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Jyot",
            detail: "Full Stack Developer",
            info: '"I am graduated in Information Technology with 3+ years of experience as full-stack developer. Familiar with back-end languages such as c#, NodeJS and modern JavaScript front-end frameworks such as React and Vue."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Zeinab",
            detail: "Backend Developer",
            info: '"I started my professional journey 8 years ago by computer networking and running servers, in between I implemented an ERP system and got familiar with Databases. Now I am a junior web application developer."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Sae Bom",
            detail: "Front-end Developer",
            info: '"Three years of work experience as a web designer. Have a skill in HTML/CSS."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Sae Beyol",
            detail: "Front-end Developer",
            info: '"I have work experience in UI design. I worked on HTML and CSS more than design."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Sweera",
            link: "sweerachahal",
            detail: "Front-end Developer",
            info: '"I am a computer Science engineering graduate who is passionate about creating new things from a scratch."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Harry",
            detail: "Lead Designer",
            info: '"I graduated with Degree of Information Technology and have experience working in business (Pharmacy, houseware). I enjoy designing and have an open mindset to learn and to contribute to the team."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Anukampa",
            detail: "Designer",
            info: '"I had completed my bachelor’s degree in Computer Science & Engineering. Currently I’m pursuing web and mobile application designing Course."',
            imgThumb: "Team_icon.svg"
        },
        {
            title: "Kuldeeep",
            detail: "Designer",
            info: '"I am in Web and Mobile App designer stream."',
            imgThumb: "Team_icon.svg"
        },

    ];

    return (

        <div className={classes.root}>
            <div className={classes.wrap}>
                <Typography variant="h4">TEAM PARROT</Typography>
                <Typography variant="subtitle1">The minds behind this project</Typography>
            </div>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={4}
                style={{ width: "85%", margin: "auto", textAlign: "-webkit-center", alignItems: "start", paddingBottom: "40px" }}
            >
                {teamCard.map(item => (
                    <Grid xs={12} sm={12} md={6} lg={6} xl={6} style={{padding: "10px"}}>
                        <CircularImageCard
                            key={item.title}
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
});
