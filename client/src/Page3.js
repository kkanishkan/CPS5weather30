import React, { Component } from 'react';
// import './Page2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Accordion, Navbar, Nav, Dropdown, Carousel, Image } from "react-bootstrap";
import API from './img/api.png';
import GetExpress from './img/getExpress.png';
import PostExpress from './img/postExpress.png';
import React1 from './img/react1.png';
import React2 from './img/react2.png';

class Page3 extends Component {
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
                                    <p><b>Part 1:</b> We first signed up for an account on https://openweathermap.org/api to get an API key.</p>
                                    <p>The API key allows us to access the JSON they provide with current weather conditions in a given city.</p>
                                    <p>Using the URL we can replace the portion (the Toronto part) of the URL with the city we want to search for.</p>
                                    <code className="code">http://api.openweathermap.org/data/2.5/weather?q=$Toronto&units=metric&appid=9367d971696fc5955624feea1eaf11d7</code>
                                    <br/>
                                    <br/>
                                    <Image fluid className="d-block" src={API} alt="API"/>
                                    <p><b>OpenWeatherMap API Doc and returning JSON</b></p>
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
                                    <p><b>Part 2:</b> Our backend is Express.JS, it will handle our API requests and package the elements of the JSON OpenWeatherMap provides.</p>
                                    <p>We are using two methods to handle the API requests, one default one we use when the page loads for the first time, and the other when the user searches for a specific city.</p>
                                    <p>Method 1</p>
                                    <code className="code">app.get('api/weather', (req,res))</code>
                                    <p>This fetches the weather information for Toronto using the same url as shown before.</p>
                                    <p>It grabs the JSON from the site and extracts the current temperature, daily low, daily high, weather condition description, and the image associated with it.</p>
                                    <br/>
                                    <Image fluid className="d-block" src={GetExpress} alt="Get Call"/>
                                    <p><b>The get call runs when the user first loads the home page</b></p>
                                    <br/>
                                    <p>Method 2</p>
                                    <code className="code">app.post('api/weather', (req,res))</code>
                                    <p>This methods works similarily to the previous with the only difference being that it takes user input and sends it along.</p>
                                    <p>It fetches the weather information based on the city the user enters.</p>
                                    <p>If the user enters a nonexistent city or makes a spelling mistake it will not fetch anything.</p>
                                    <br/>
                                    <Image fluid className="d-block" src={PostExpress} alt="Post Call"/>
                                    <p><b>The post call when user searches for a city</b></p>
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
                                    <p><b>Part 3:</b>ReactJS handles all of our front end.</p>
                                    <p>We handle all of our page routing in React.</p>
                                    <p>In terms of design, we used a bootstrap package called "react-bootstrap" to easily input bootstrap similarily to html.</p>
                                    <p>The rest of the pages are made very similarily to stock HTML.</p>
                                    <br/>
                                    <Image fluid className="d-block" src={React1} alt="Post Call"/>
                                    <p><b>The Navigation at the top of every page</b></p>
                                    <br/>
                                    <Image fluid className="d-block" src={React2} alt="Post Call"/>
                                    <p><b>The Routing for all of the pages</b></p>
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