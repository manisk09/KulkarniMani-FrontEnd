import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {Button} from "@material-ui/core";
import Modal from "react-bootstrap/Modal";
import Axios from 'axios';

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
        "& input": {
            width: '20rem',
            height: '2.5rem',
            marginLeft:'5px',
            color: '#eee',
            background: '#373233',
            borderStyle: 'solid',
            borderColor:'#efeaea'
        },
        "& textarea": {
            width: '20rem',
            marginLeft:'5px',
            color: '#eee',
            background: '#373233',
            borderStyle: 'solid',
            borderColor:'#efeaea'
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
    },

    emailAddress: {
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'opensans-bold',
        color: '#EBEEEE',
        marginBottom:'2rem',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    query: {
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'opensans-bold',
        color: '#EBEEEE',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    }

});

export function ContactPage() {

    const classes = useStyles();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {

        const message = {email, query};

        // Below axios request to the express server.
        // Once we get response from server, success message box is displayed.
        (async () => {

            try {

                console.log(message);

                const result = await Axios.post('/createQuery', message);

                console.log(result);

                setShow(true);

                // To close the message box automatically after 5 secs.
                setTimeout(handleClose, 5000);

            } catch (err) {

                console.error((err));

            }

        }) ();
    }

    // Below state is to set the latest text in the email text field..
    const [email, setEmail] = useState("");

    // Below state is to set the latest text in the query text field.
    const [query, setQuery] = useState("");

    return (

        <div className={classes.contactPage}>

            <div className={classes.messageBox}>

                <div className={classes.emailAddress}>

                    <h3> Enter your email: </h3>

                    <input type="text"
                           placeholder={"email"}
                           onChange={(event) => setEmail(event.target.value)}/>

                </div>

                <div className={classes.query}>

                    <h3> Enter your query: </h3>

                    <textarea
                        placeholder={"query"}
                        rows={5}
                        onChange={(event) => setQuery(event.target.value)}/>

                </div>

                <Button type='submit'
                        className={classes.submit}
                        onClick={handleShow}>

                    SUBMIT

                </Button>

            </div>

            <Modal show={show}
                   onHide={handleClose}
                   className={classes.centeringModal}>

                <Modal.Header closeButton>

                    <Modal.Title>Message Box</Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <br/>

                    <h4>
                        Hi, {email} !! <br /><br />
                        You have successfully submitted a query!
                    </h4>

                    <br/>

                </Modal.Body>

            </Modal>

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