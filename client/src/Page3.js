import React, { Component } from 'react';
// import './Page2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Image, Figure, Card, Accordion, Navbar, Nav } from "react-bootstrap";
// import page3Img1 from './img/Capture.PNG';
// import page3Img2 from './img/Capture1.PNG';
// import page3Img3 from './img/Capture2.PNG';
// import page3Img4 from './img/Capture3.PNG';
// import page3Img5 from './img/Capture4.PNG';


class Page3 extends Component {
    render() {
        const NavBar = () => (
            <div>
              <Navbar bg="light" expand="lg">
              <Navbar.Brand href="./">5Weather30</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="./Page1">Page1</Nav.Link>
                  <Nav.Link href="./Page2">Page2</Nav.Link>
                  <Nav.Link href="./Page3">Page3</Nav.Link>
                  <Nav.Link href="./Conclusion">Conclusion</Nav.Link>
                  {/* <Nav.Link href="./Weather">Weather App</Nav.Link> */}
                </Nav>
                <img  style={{height:"50px"}} src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"></img>
              </Navbar.Collapse>
            </Navbar>
            </div>
          );
        return (
            <div>
                <NavBar/>
                <div>
                    <h1>Tutorial</h1>
                    <br/>
                    <p>Our website displays the weather in a given city searched for by a user.</p>
                    <p>This is accomplished using the the OpenWeatherMap API.</p>
                    <br/>
                    <h2>API</h2>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="ccard">
                                    <p>Part 1: We first signed up for an account on https://openweathermap.org/api to get an API key.</p>
                                    <p>The API key allows us to access the JSON they provide with current weather conditions in a given city.</p>
                                    <p>Using the URL we can replace the portion (the Toronto part) of the URL with the city we want to search for.</p>
                                    <code>http://api.openweathermap.org/data/2.5/weather?q=$Toronto&units=metric&appid=9367d971696fc5955624feea1eaf11d7</code>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <h2>Express.js</h2>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="ccard">
                                    <p>Part 2: Our backend is Express.JS, it will handle our API requests and package the elements of the JSON OpenWeatherMap provides.</p>
                                    <p>We are using two methods to handle the API requests, one default one we use when the page loads for the first time, and the other when the user searches for a specific city.</p>
                                    <p>Method 1</p>
                                    <code>app.get('api/weather', (req,res))</code>
                                    <p>This fetches the weather information for Toronto using the same url as shown before.</p>
                                    <p>It grabs the JSON from the site and extracts the current temperature, daily low, daily high, weather condition description, and the image associated with it.</p>
                                    <p>Method 2</p>
                                    <code>app.post('api/weather', (req,res))</code>
                                    <p>This methods works similarily to the previous with the only difference being that it takes user input and sends it along.</p>
                                    <p>It fetches the weather information based on the city the user enters.</p>
                                    <p>If the user enters a nonexistent city or makes a spelling mistake it will not fetch anything.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <h2>React.js</h2>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="ccard">
                                    <p>Part 3: ReactJS handles all of our front end.</p>
                                    <p>We handle all of our page routing in React.</p>
                                    <p>In terms of design, we used a bootstrap package called "react-bootstrap" to easily input bootstrap similarily to html.</p>
                                    <p>The rest of the pages are made very similarily to stock HTML.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default Page3;