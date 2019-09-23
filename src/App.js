import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Overview from './Components/Overview';
import Videos from './Components/Videos';
import Forum from './Components/Forum';
import Home from './Components/Home';
import Nav from './Components/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/' component={Nav} />
          <Route path='/overview' component={Overview} />
          <Route path='/videos' component={Videos} />
          <Route path='/forum' component={Forum} />
        </Router>
    );
  }
}

export default App;
