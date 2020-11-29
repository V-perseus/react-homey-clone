import React from 'react'
import {Row, Container, Col, Image} from 'react-bootstrap';
import img1 from './images/entrance.jpg';
import img2 from './images/inside.jpg';
import img3 from './images/outside-golf.png';
import img4 from './images/outside.jpg';
import img5 from './images/third-background.jpg';
import styled from 'styled-components';


const Styles = styled.div`
    
`;

function Gallery() {
    
    return (
        <Styles>
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
        </Styles>
        
        
        )
}

export default Gallery
