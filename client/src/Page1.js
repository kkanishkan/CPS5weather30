import React, { Component } from 'react';
import './Page1.css';

class Page1 extends Component {
  render() {
    const ReactParagraph = () => (
      <div>
        <h1>Welcome To React Tutorial</h1>
      <h4>(A JavaScript library for building user interfaces)</h4>
      <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo"></img>

      <h3>What is React?</h3>
      <span>React is a JavaScript library for building user interfaces. React was first released in 2013 and is maintained
         by Facebook and a community of individual developers and companies. It is a way to build user interfaces and is only
          concerned with what you see on the front-end. React is not a JavaScript framework, it is a JavaScript library. 
          React makes user interfaces very easy to build by cutting each page into pieces; these are called components.
           React component is a bit of code that represents a piece of the page. Each component is a JavaScript function
            that returns a piece of code that represents a piece of a web page.
</span>

<h3>Popularity</h3>
      <span>
      In 2019, React was one of the most popular JavaScript frontend frameworks. 
      It ranked second in among developers and first on the most wanted tools. 
</span>

<h3>Strengths</h3>
      <span>
      React reduces the load time for pages and has faster rendering speed. React also has reusable components,
       which you can use to make bigger things. They also help you implement a consistent look and feel across the whole project. 
       Also, with React, there is simpler code with fewer bugs. React has handy tools, which makes the tasks of
        developers understandable and easier. ReactJS improves performance due to virtual DOM. 
        The DOM is a cross-platform and programming API which deals with HTML, XML or XHTML. 
        React is also very easy to test. It offers a scope where the developer can test and debug their codes with the help of native tools.
</span>

<h3>Weaknesses</h3>
      <span>
      Even though React has many strengths, it also as weaknesses. One weakness is that there is poor documentation.
       Since React technologies are updating and accelerating so fast that there is no time to make proper documentation.
        React also has a high pace of development and this is why developers do not like relearning the new ways to do regular things.
         Also, react only covers the UI layers of the app. Therefore, you need to choose some other technologies to get a complete tooling set for development in the project. 
</span>

<h3>Which Developers Mostly Use It</h3>
      <span>
      React is used in many popular applications; for example: Uber, Instagram, Facebook, Netflix, Pinterest and more.
       There are more than 18,761 developers that use React.
       Some include: Atlassian, Wishlist, Shift, Full Stack, and many more!
</span>
<hr></hr>
      </div>
    );

    const ExpressParagraph = () => (
      <div>
        <h1>Welcome To Express Tutorial</h1>
        <h4>(Fast, unopinionated, minimalist web framework for Node.js)</h4>
      <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express Logo"></img>
        <h3>What is Express?</h3>
        <span>Express 3.x is a light-weight web application framework to help organize your web application into
           an MVC architecture on the server side. The primary use of Express is to provide server-side logic for
            web and mobile applications, and as such it’s used all over the place.
  </span>
  
  <h3>Popularity</h3>
        <span>
        Express is the most popular Node framework. It brands itself as a fast, 
        unopinionated, and minimalist framework. Express acts as middleware: 
        it helps set up and configure routes to send and receive requests between the front-end and the database of an app.
 
  </span>
  
  <h3>Strengths</h3>  
        <span>
        Express is easy to learn. If there is a good foundation of JavaScript knowledge,
         it makes it very easy to learn Express. This framework is simple to customize and configure for certain demands.
          With Express, it is quick to get something working with not too many lines of code. Express is well documented 
          by their own documentation online. It is also highly flexible for different kinds of API requirements. 

  </span>
  
  <h3>Weaknesses</h3>
        <span>
        There is a lot of manual tedious tasks involved in Express. 
        There is no built in error handling, it is easy to get lost in all of the middleware that could 
        be added to solve a solution, and there are many ways to do one thing. Express also has a larger 
        footprint compared to the other frameworks.

  </span>
  
  <h3>Which Developers Mostly Use It</h3>
        <span>
        There are more than 1,231 companies use Express in their tech stacks. 
        Some include: Twitter, Intuit, Open Table, and many more. There are more than 4,569 developers
         that use Express. Some developers that use Express are: MEAN, Favorites, Airbrake, Sentry, and many more. 
  </span>
      </div>
    );


    return (
      <div>
        <ReactParagraph/>
        <ExpressParagraph/>
      </div>
    )
  }
}

export default Page1;
