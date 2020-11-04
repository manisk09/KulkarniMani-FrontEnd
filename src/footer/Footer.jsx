import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({

    footer: {
        width: '100%',
        height: '3rem',
        backgroundColor: '#02151f',
        display: 'flex',
        alignItems: 'center'
    },

    footerContent: {

        color: '#525252',
        fontFamily: ['ring', 'serif'],
        marginBottom: '0',
        paddingLeft: '2rem'

    }
});

export function Footer() {

    const classes = useStyles();

    return(

        <div className={classes.footer}>

            <p className={classes.footerContent}>

                Copyright © Mani Shankar 2020. All Rights Reserved.

            </p>

        </div>

    )
}