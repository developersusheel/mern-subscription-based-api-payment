import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
