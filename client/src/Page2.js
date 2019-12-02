import React, { Component } from 'react';
import './Page2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image, Navbar, Nav, Dropdown } from "react-bootstrap";
import img from './img/Capture.PNG';
import img1 from './img/Capture1.PNG';
import img2 from './img/Capture2.PNG';
import img3 from './img/Capture3.PNG';
import img4 from './img/Capture4.PNG';
import img5 from './img/Capture5.PNG';
import img6 from './img/Capture6.PNG';

class Page2 extends Component {
  render() {
    const InstallationReact = () => (
      <div id="align">
        <br/>
        <h4>Steps for installing React</h4>
        <ol>
          <li>Install NodeJs from <code className="code">https://nodejs.org/en/download/</code></li>
          <p>Type the following commands in Command Line/Terminal.</p>
          <li><code className="code">$ (sudo) npm i -g create-react-app@1.5.2</code></li> 
          <li><code className="code">$ create-react-app react-app</code></li>
          <li><code className="code">$cd react-app/</code></li>
          <li><code className="code">$npm start</code></li>
        </ol>
        <hr></hr>
      </div>
    );

    const InstallationExpress = () => (
      <div id="align">
        <h4>Steps for installing Express</h4>
        <ol>
          <li>First need to start off by installing express generator. Simply type in <code className="code">‘sudo npm install -g express-generator’</code> (for windows you do not need to include sudo).</li>
          <li>Go into the text editor of your choice and identify the express generator by typing in express and the name of the file into the root folder. </li> 
          <li>By doing this, it creates all the folders and files that you need during the duration of your project. </li>
          <li>Inside the folder, we type in<code className="code">‘npm install’</code>  and this creates a node modules that holds all of the dependencies needed for the project. You can access these modules through the text editor. </li>
          <li>To start the server, you type in<code className="code"> ‘npm start’</code> into the main project folder’s terminal. </li>
        </ol>
        <h3>Now the server is fired up, time for you to write some code!</h3>
        <hr></hr>
      </div>
    );

    const SlideShowReact = () => (
      <div className="row">
        <Carousel className="w-50 h-25 mr-auto ml-auto">
  <Carousel.Item >
    <Image fluid
      className="d-block w-100 h-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 id="first">Step #1</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image fluid
      className="d-block w-100 h-100"
      src={img1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Step #2</h3>
      <p>Type the above Command in Terminal/CommandLine</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image fluid
      className="d-block w-100 h-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Step #3</h3>
      <p>Type the above Command in Terminal/CommandLine</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image fluid
      className="d-block w-100 h-100"
      src={img3}
      alt="fourth slide"
    />

    <Carousel.Caption>
      <h3>Step #4</h3>
      <p>Type the above Command in Terminal/CommandLine</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <Image fluid
      className="d-block w-100 h-100"
      src={img4}
      alt="fifth slide"
    />

    <Carousel.Caption>
      <h3>Step #5</h3>
      <p>Type the above Command in Terminal/CommandLine</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    );


    const SlideShowExpress = () => (
      <div className="row">
        <Carousel className="w-50 h-25 mr-auto ml-auto">
  <Carousel.Item >
    <Image fluid
      className="d-block w-100 h-100"
      src={img5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 id="first">Step #1</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image fluid
      className="d-block w-100 h-100"
      src={img6}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Step #4</h3>
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>
      </div>
    );

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
          <InstallationReact/>
          <SlideShowReact/>
          <br></br>
          <hr></hr>
          <InstallationExpress/>
          <SlideShowExpress/>
        </div>
      </div>
    )
  }
}

export default Page2;
