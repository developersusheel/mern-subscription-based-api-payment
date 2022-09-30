import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route expect path="/" component={Home} />
        <Route expect path="/register" component={Register} />
        <Route expect path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
