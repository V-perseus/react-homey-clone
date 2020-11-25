import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Background1 from './Background1';
import Banner from './Banner';
import Detail from './Detail';
import Video from './Video';
import Detail1 from './Detail1';
import Carousel from './Carousel';
import Background2 from './Background2';
import Detail2 from './Detail2';
import Map from './Map';


function App() {
  return (
    <React.Fragment>
        <Banner />
        <Background1 />
        <Detail />
        <Video />
        <Detail1 />
        <Background2 />
        <Carousel />
        <Detail2 />
        <Map />
    </React.Fragment>
  );
}

export default App;
