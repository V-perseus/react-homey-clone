import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Background1 from './Background1';
import Banner from './Banner';
import Detail from './Detail';
import Video from './Video';

const Styles = styled.div `
 
`;

function App() {
  return (
    <React.Fragment>
      <Banner sticky="top"/>
      <Background1 />
      <Detail />
      <Video />
    </React.Fragment>
  );
}

export default App;
