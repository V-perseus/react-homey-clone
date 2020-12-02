import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Jumbotron as Jumbo, Container} from 'react-bootstrap';
import dogImage from './images/dog.png';
import styled from 'styled-components';
import {Row} from 'react-bootstrap'

const Styles = styled.div`
    .jumbo {
        background: url(${dogImage}) no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        color:yellow;
        height: 92vh;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.2;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    
`;

function Background1() {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <Row>
                        <h1 className="text-center">Welcome to  Homey</h1>
                    </Row>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Background1

