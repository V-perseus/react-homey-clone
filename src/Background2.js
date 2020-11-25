import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Jumbotron as Jumbo, Container} from 'react-bootstrap';
import bg2 from './images/third-background.jpg';
import styled from 'styled-components';
import {Row} from 'react-bootstrap'

const Styles = styled.div`
    .jumbo {
        background: url(${bg2}) no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        color:yellow;
        height: 50vh;
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
                        <h1>Welcome to Mango Jam's React Homey</h1>
                    </Row>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Background1

