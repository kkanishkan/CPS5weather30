import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Navbar, Nav, Dropdown} from "react-bootstrap";

import Kanishkan from './img/kanishkan.jpg'
import Mo from './img/mo.jpg';
import Andy from './img/andy.jpg';
import Ishak from './img/ishak.jpg';
import Avneet from './img/ishak.jpg';

class Credits extends Component {

    render() {
        const NavBar = () => (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="./">5Weather30</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="./Page1">Page1</Nav.Link>
                            <Nav.Link href="./Page2">Page2</Nav.Link>
                            <Nav.Link href="./Page3">Page3</Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    Devs
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="./Conclusion">Conclusions</Dropdown.Item>
                                    <Dropdown.Item href="./Credits">Credits</Dropdown.Item>
                                    <Dropdown.Item href="./References">References</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <img style={{height: "50px"}}
                             src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"
                             alt="logo"></img>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );

        return (
            <div className="credits">
                <NavBar/>
                <div>
                    <h1>Our Team</h1>
                    <Image src={Kanishkan} alt="Kanishkan" roundedCircle/>
                    <h5>Kanishkan Kukarajah (500723832)</h5>
                    <br/>
                    <br/>
                    <Image src={Mo} alt="Mohammed" roundedCircle/>
                    <h5>Mohamed Elbadry (500860249)</h5>
                    <br/>
                    <br/>
                    <Image src={Andy} alt="Andy" roundedCircle/>
                    <h5>Andy Ho (500754624)</h5>
                    <br/>
                    <br/>
                    <Image src={Ishak} alt="Ishak" roundedCircle/>
                    <h5>Ishak Ahmed (500576186)</h5>
                    <br/>
                    <br/>
                    <Image src={Avneet} alt="Avneet" roundedCircle/>
                    <h5>Avneet Jaswal (500838517)</h5>
                </div>
            </div>
        )
    }

}

export default Credits;
