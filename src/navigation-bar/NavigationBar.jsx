import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import { useHistory } from "react-router-dom";


export function NavigationBar() {

        const history = useHistory();

        function navigateToHome() {

            history.push('/');

        }

        function navigateToContact() {

            history.push('/contact');

        }

    return(

        <>

            <Navbar bg={"dark"} variant={"dark"} className={"justify-content-center"}>

                <Nav>

                    <Nav.Item className={"px-3"}>

                        <Nav.Link onClick={navigateToHome}>Home</Nav.Link>

                    </Nav.Item>

                    <Nav.Item className={"px-3"}>

                        <Nav.Link onClick={navigateToContact}>Contact</Nav.Link>

                    </Nav.Item>

                </Nav>

            </Navbar>

        </>

    )
}