import React from 'react';
import Home from './Home';
import Nav from './Nav';
import Notification from './Notification';
import Community from './Community';
import Facility from './Facility';
import Suggestion from './Suggestion';
import Repair from './Repair';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notification" component={Notification} />
          <Route path="/community" component={Community} />
          <Route path="/facility" component={Facility} />
          <Route path="/suggestion" component={Suggestion} />
          <Route path="/repair" component={Repair} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
