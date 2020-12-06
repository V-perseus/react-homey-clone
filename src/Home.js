import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Jumbotron as Jumbo, Container} from 'react-bootstrap';
import dogImage from './images/dog.png';
import bg1 from './images/second-background.jpg';
import bg2 from './images/third-background.jpg';
import img1 from './images/entrance.jpg';
import img2 from './images/inside.jpg';
import img3 from './images/outside-golf.png';
import img4 from './images/outside.jpg';
import img5 from './images/third-background.jpg';
import styled from 'styled-components';
import {Row, Col, Image} from 'react-bootstrap';
import Map from "./components/Map";

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
    .jumbo1 {
        background: url(${bg1}) no-repeat;
        background-size: 100% 100%;
        color:yellow;
        height: 600px;
        position: relative;
        z-index: -2;
    }
    .jumbo3 {
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
                        <h1 className="text-center">Welcome to Our Homey React Site</h1>
                    </Row>
                </Container>
            </Jumbo>
            <Container>
                <Row className="row">
                    <h1>Greeting of the link 345</h1>
                    <p>Hello residents, this apartment has now opened an apartment application service to offer better life. We will make apartments better only for residents with transparency and sincerity. We hope that new service will get close to all residents as quickly as possible. And resident can also communicate each other more than before. Our management office will do the best for our resident. We sincerely wish your peace and happiness The Link 345 Thank you.</p>
                </Row>
            </Container>
            <Jumbo fluid className="jumbo1">
                <div className="overlay"></div>
            </Jumbo>
            <Container>
                    <Row className="row">
                        <h1>The management office in The Link 345</h1>
                        <p>Ladies and gentle men. Please feel free to contact us! The Link 345 is always by your side.</p>
                    </Row>
            </Container>
            <Jumbo fluid className="jumbo3">
                <div className="overlay"></div>
                <Container>
                    <Row>
                        <h1>Welcome to Mango Jam's React Homey</h1>
                    </Row>
                </Container>
            </Jumbo>
            <Container>
                <Row className="text-center">
                    <Col xs={12} md={12} className="mt-3">
                        <h1>The 345 Link</h1>
                    </Col>
                    <Col xs={12} md={4} className="image mt-3">
                        <Image src={img1} thumbnail />
                    </Col>
                    <Col xs={12} md={4} className="image mt-3">
                        <Image src={img2} thumbnail />
                    </Col>
                    <Col xs={12} md={4} className="image mt-3">
                        <Image src={img3} thumbnail />
                    </Col>
                    <Col xs={12} md={4} className="image mt-3">
                        <Image src={img4} thumbnail />
                    </Col>
                    <Col xs={12} md={4} className="image mt-3">
                        <Image src={img5} thumbnail />
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 mb-5">
                <Row className="d-flex text-center align-items-center">
                    <Col xs={12} md={12}>
                        <h1>The Link 345 Location</h1>
                    </Col>
                    <Col md={12}>
                        <p>Sammie is a gentle man.</p>
                    </Col>
                </Row>
            </Container>
            <Map />
            <Container fluid>
                <Row className="text-center">
                    <Col xs={12} md={6} className="mt-5">
                        <h1>Support</h1>
                    </Col>
                    <Col xs={12} md={6} className="mt-5">
                        <h1>Contact</h1>
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}

export default Background1
