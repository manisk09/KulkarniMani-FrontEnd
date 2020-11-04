import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/cjs/Row";
import Image from "react-bootstrap/cjs/Image";
import ProfileImage from "../images/ManiSK.jpeg";

const useStyles = makeStyles({
        aboutMe: {
            display: 'flex',
            justifyContent: 'center',
            background: '#2B2B2B',
            paddingTop: '96px',
            paddingBottom: '96px'
        },
        imageItem: {
            position: 'relative',
            width: '120px',
            height: '120px',
            borderRadius: '100%'
        },
        detailsItem: {
            paddingRight: '5%',
            "& h2": {
                color: '#fff',
                marginBottom: '12px',
                fontSize: '2rem',
                fontWeight: 'bold',
                fontFamily: 'opensans-bold'
            },
            "& p": {
                lineHeight: '30px',
                color: '#7A7A7A'
            },
            "& span": {
                lineHeight: '30px',
                color: '#7A7A7A',
                float: 'right'
            }
        },
    }
)

export function AboutMe() {

    const classes = useStyles();

    return (

        <div className={classes.aboutMe}>

            <Row>

                <Col xs={'3'}>
                    <Image className={classes.imageItem}  src={ProfileImage} alt="Tim Baker Profile Pic" />
                </Col>

                <Col xs={'9'} className={classes.detailsItem}>
                    <h2>About Me</h2>

                    <p>I am an aspiring Full-Stack Developer.
                        I enjoy creating web and mobile applications.
                    </p>
                    <span>P.S: I watch and play soccer.</span>

                </Col>

            </Row>

        </div>

    )

}