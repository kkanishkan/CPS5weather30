import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Dropdown} from "react-bootstrap";

class References extends Component {

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
                    <h1>References</h1>
                    <div className="references">
                        <ul>
                            <li><a href="https://reactjs.org/tutorial/tutorial.html">https://reactjs.org/tutorial/tutorial.html</a></li>
                            <li><a href="https://expressjs.com/en/4x/api.html">https://expressjs.com/en/4x/api.html</a></li>
                            <li><a href="https://www.youtube.com/watch?v=Ke90Tje7VS0">https://www.youtube.com/watch?v=Ke90Tje7VS0</a></li>
                            <li><a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a></li>
                            <li><a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app">https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app</a></li>
                            <li><a href="https://openweathermap.org/current">https://openweathermap.org/current</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default References;
