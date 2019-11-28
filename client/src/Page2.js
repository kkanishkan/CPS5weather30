import React, { Component } from 'react';
import './Page2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel,Image} from "react-bootstrap";
import img from './img/Capture.PNG';
import img1 from './img/Capture1.PNG';
import img2 from './img/Capture2.PNG';
import img3 from './img/Capture3.PNG';
import img4 from './img/Capture4.PNG';

class Page2 extends Component {
  render() {
    const Installations = () => (
      <div>
        
        <ol>
          <li>Install NodeJs from https://nodejs.org/en/download/</li>
          <p>Type the following commands in Command Line/Terminal.</p>
          <li><code>$ (sudo) npm i -g create-react-app@1.5.2</code></li> 
          <li><code>$ create-react-app react-app</code></li>
          <li><code>$cd react-app/</code></li>
          <li><code>$npm start</code></li>
        </ol>
        <h3>Now the server is fired up, time for you to write some code!</h3>
        <hr></hr>
      </div>
    );

    const SlideShow = () => (
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


    return (
      <div>
        <Installations/>
        <SlideShow/>
      </div>
    )
  }
}

export default Page2;
