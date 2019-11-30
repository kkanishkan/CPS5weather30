import React, {Component} from 'react';
import './Conclusion.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Navbar, Nav, Dropdown} from "react-bootstrap";
import img from "./img/Capture.PNG";


class Conclusion extends Component {

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
            <div className="conclusion">
                <NavBar/>
                <h1>Conclusions</h1>
                <Card className="ccard mb-3">
                    <Card.Body>
                        <Card.Title>Kanishkan Kukarajah</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">500723832</Card.Subtitle>
                        <Card.Text>
                            Working with ReactJs and ExpressJs has been a fun and interesting experience. While building
                            on things we learned over the semester, this assignment was also completely different.
                            Everything is much segmented and concentrated front-end wise with ReactJs. It was actually
                            easier to plan out and implement our site piece by piece, instead of just doing it all at
                            once. It was also my first time working with ExpressJs, which ended up being a lot more
                            intuitive than I initially assumed. But working with OpenWeather API was definitely the
                            highlight of the project for me. Learning about how a back-end and front-end communicate
                            with each other was very fun. In conclusion, I am glad we picked these frameworks, they have
                            been very fun to work with and I'm excited to learn more about them.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ccard mb-3">
                    <Card.Body>
                        <Card.Title>Andy Ho</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> 500754624</Card.Subtitle>
                        <Card.Text>
                            <p>
                                Working through this project allowed me to get a better understanding of how a website
                                is built, utilising both front-end and back-end technologies and how they interact
                                together to create a finished product.
                            </p>
                            <p>
                                Even with a basic knowledge of how basic HTML pages are created, these Javascript
                                frameworks/libraries are far more advanced than classical PHP backends and CSS
                                frameworks, requiring a fairly steep learning curve to be able to work with but the
                                experience was still enhanced by having learned these basic building blocks to begin
                                with. React as a frontend library made working with the UI of the webpage very simple as
                                it allowed us to work with different components of the site separately while also making
                                sure that it would be simple to connect them together. Alongside React, using Express.js
                                in the backend to make API calls for some of our pages was fairly simple after learning
                                the basics of the framework. Then using React it was easy to link the information we
                                obtained from the API call from Express.js to React and display the information.
                            </p>
                            <p>
                                Overall, being able to learn these modern technologies which are a part of the most
                                popular ones used today has been a positive experience that I can use to get a first
                                step into web development for future opportunities.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ccard mb-3">
                    <Card.Body>
                        <Card.Title>Mohamed Elbadry</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">500860249</Card.Subtitle>
                        <Card.Text>
                            <p>
                                I learned a lot from this project and I have grown a big foundation of a new FrontEnd
                                FrameWork,React.
                            </p>
                            <p>
                                I started the project only knowing html,css, and a small foundation of JavaScript. Then
                                I watched an hour crash course on React, and I was surprised by how easy the
                                installation was. Just a couple of commands on the Terminal and you are set up with
                                React. What I appreciate about React is that it uses JSX ,a unique syntax that allows
                                HTML quotes as well as HTML tag syntax application for rendering specific subcomponents,
                                which I found very helpful in structuring the components and make the code more
                                readable.You can create amazing Single Page Applications very quickly just by knowing
                                HTML, CSS, and Javascript.
                            </p>
                            <p>
                                To wrap it up, I gained a great experience by using React in this project. Hopefully, I
                                will enhance my knowledge with React and carry the experience gained in this project to
                                my future work.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ccard mb-3">
                    <Card.Body>
                        <Card.Title>Avneet Jaswal</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">500838517</Card.Subtitle>
                        <Card.Text>
                            <p>
                                The frameworks that we used were React as frontend and Express as backend. Both React and
                                Express were not difficult to install because I watched a step-by-step video that showed
                                how to install both of these frameworks and it made it much simpler. I had no prior
                                experience with Express or React so everything was very new for me. Both React and Express
                                were a little confusing at first because I had not worked with any of them before, but
                                they were not difficult to pick up. There are many videos online, which made it easier
                                to learn and gave proper step by step instructions on the basics of these frameworks.
                                The pages were not difficult to create with these frameworks. Both of these frameworks
                                were more difficult to learn than HTML/CSS/Javascript/PHP. I do not regret the choice of
                                these frameworks because I got a chance to learn something new.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ccard mb-3">
                    <Card.Body>
                        <Card.Title>Ishak Ahmed</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">500576186</Card.Subtitle>
                        <Card.Text>
                            <p>
                                XYZ
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default Conclusion;
