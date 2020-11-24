import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import bg1 from './images/second-background.jpg';



const Styles = styled.div`
 .jumbo {
        background: url(${bg1}) no-repeat;
        background-size: 100% 100%;
        color:yellow;
        height: 600px;
        position: relative;
        z-index: -2;
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
