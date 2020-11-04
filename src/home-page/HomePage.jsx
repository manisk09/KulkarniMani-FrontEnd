import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MyImage from "../images/header-background.JPG";
import {AboutMe} from "../about-me/AboutMe";
import {ProjectWork} from "../projects/ProjectWorks";

const useStyles = makeStyles({

    homePage: {
        minHeight: '100vh',
        verticalAlign: 'middle',
        width: '100%',
        paddingTop: '5rem',
        background: '#161415',
        backgroundImage: `url(${MyImage})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        margin: ['0', 'auto'],
    },

    homePageText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        width: '100%',
        "& h1": {
            color: '#fff',
            letterSpacing: '-2px',
            width: '50%',
            fontSize: '5rem',
            fontWeight: 'bold'
        },
        "& h3": {
            color: '#fff',
            width: '70%',
        },
        "& hr": {
            width: '70%',
        }

    }
});

export function HomePage() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.homePage}>

                <div className={classes.homePageText}>

                    <h1 className="responsive-headline">I'm Mani Shankar Kulkarni.</h1>

                    <h3>I'm a Student @University of New Haven.</h3>

                    <h3>Pursuing my Masters in Computer Science.</h3>

                    <hr />

                </div>

            </div>

            <AboutMe />

            <ProjectWork />

        </>

    )
}