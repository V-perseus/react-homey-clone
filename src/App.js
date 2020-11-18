import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Background1 from './Background1';
import Banner from './Banner';
function App() {
  return (
    <React.Fragment>
      <Banner />
      <Background1 />
    </React.Fragment>
  );
}

export default App;
