import React from 'react';
import styled from 'styled-components';
import bg1 from './images/bg1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';


const Styles = styled.div`
 .jumbo {
     background : url(${bg1});
     background-size : 100% 100%;
     height: 400px;
 }
`;


function Video() {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
            </Jumbo>
        </Styles>
    )
}

export default Video
