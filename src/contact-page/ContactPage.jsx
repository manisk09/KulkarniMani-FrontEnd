import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {Button} from "@material-ui/core";
import Modal from "react-bootstrap/Modal";

const useStyles = makeStyles({

    contactPage: {
        minHeight: 'calc(100vh - 6.3rem)',
        display: 'flex',
        justifyContent: 'center',
        background: '#191919'
    },

    messageBox: {
        paddingRight: '20rem',
        paddingTop: '5rem',
        "& #contactMessage":{
            background: '#373233'
        },
        display: 'flex',
        flexDirection: 'column'
    },

    submit: {
        letterSpacing: '0.5rem',
        color: '#fff',
        background: '#0D0D0D',
        marginLeft: '26%',
        marginRight: '26%',
        marginTop: '2rem',
        cursor: 'pointer',
        height: '3rem',
        border: 'none',
        borderRadius: '3px',
    },

    addressBox: {
        paddingTop: '5rem',

    },

    address: {
        "& #addressTitle": {
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'opensans-bold',
            color: '#EBEEEE',
            marginBottom: '6px'
        },
        "& #addressContent": {
            fontSize: '1rem',
            fontWeight: 'bold',
            fontFamily: 'opensans-bold',
            color: '#636363',
            marginTop: '15px'
        }
    },

    linkedInIcon: {
        fontSize: '30px'
    },

    centeringModal: {
        position: 'fixed',
        top: '40%'
    }

});

export function ContactPage() {

    const classes = useStyles();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setTimeout(handleClose, 5000)
    }


    return (

        <div className={classes.contactPage}>

            <div className={classes.messageBox}>

                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"/>

                <Button type='submit'
                        className={classes.submit}
                        onClick={handleShow}>

                    SUBMIT

                </Button>

                <Modal show={show}
                       onHide={handleClose}
                       className={classes.centeringModal}>

                    <Modal.Header closeButton>

                        <Modal.Title>Message Box</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>

                        <br/>

                        <h4>
                            You have successfully submitted a query!
                        </h4>

                        <br/>

                    </Modal.Body>

                </Modal>

            </div>

            <div className={classes.addressBox}>

                <div className={classes.address}>

                    <h4 id={'addressTitle'}>
                        Address and Phone
                    </h4>

                    <p id={'addressContent'}>

                        Mani Shankar Kulkarni<br />
                        1800 Silas Deane Hwy <br />
                        Rocky Hill, CT 06067<br />

                        <span>+(475)-319-8535</span>

                    </p>

                </div>

                <div className={classes.linkedInIcon}>

                    <a href="https://www.linkedin.com/in/manishankarkulkarni/">

                        <FontAwesomeIcon icon={faLinkedin} />

                    </a>

                </div>

            </div>

        </div>

    )
}