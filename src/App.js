import React, { Component } from 'react';
import { Route, Router, Switch} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkAdd from './components/LinkAdd';
import Home from './components/Home'
import history from './history';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={LinkAdd} />
          </Switch>
        </Router>
        <ToastContainer />  
      </div>
    );
  }
}

export default App;

