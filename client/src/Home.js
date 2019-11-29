import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";


class Home extends Component {
    render() {
        const NavBar = () => (
            <div>
              <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">5Weather30</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="./Page1">Page1</Nav.Link>
                  <Nav.Link href="./Page2">Page2</Nav.Link>
                  <Nav.Link href="./Page3">Page3</Nav.Link>
                  <Nav.Link href="./Weather">Weather App</Nav.Link>
                </Nav>
                <img  style={{height:"50px"}} src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"></img>
              </Navbar.Collapse>
            </Navbar>
            </div>
          );

        return (
            <div className = "App">
                <NavBar/>
                <h1>Home Page</h1>
                <Link to={'./Page1'}>
                    <button variant="raised">
                        Page 1
                    </button>
                </Link>
                <Link to={'./Page2'}>
                    <button variant="raised">
                        Page 2
                    </button>
                </Link>
                <Link to={'./Page3'}>
                    <button variant="raised">
                        Page 3
                    </button>
                </Link>
                <Link to={'./Weather'}>
                    <button variant="raised">
                        The Weather
                    </button>
                </Link>
                <Link to={'./Conclusion'}>
                    <button variant="raised">
                        Conclusion
                    </button>
                </Link>

            </div>
        )
    }
}

export default Home;