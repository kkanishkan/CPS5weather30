import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Conclusion from './Conclusion';
import Credits from './Credits';
import References from './References';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/page1' component={Page1}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/page3' component={Page3}/>
          <Route path='/conclusion' component={Conclusion}/>
          <Route path='/credits' component={Credits}/>
          <Route path='/references' component={References}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}


export default App;