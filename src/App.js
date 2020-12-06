import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Background1 from './Background1';
import Banner from './Banner';
import Detail from './Detail';
import Video from './Video';
import Detail1 from './Detail1';
import Gallery from './Gallery';
import Background2 from './Background2';
import Detail2 from './Detail2';
import Map from './Map';
import Footer from './Footer';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Banner />
        <Background1 />
        <Detail />
        <Video />
        <Detail1 />
        <Background2 />
        <Gallery />
        <Detail2 />
        <Map />
        <Footer />
      </Router> 
    </React.Fragment>
  );
}

export default App;
