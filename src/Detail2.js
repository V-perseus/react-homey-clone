import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Col, Container} from 'react-bootstrap';
import styled from 'styled-components';
import {Row} from 'react-bootstrap'

const Styles = styled.div`
    
`;

function Detail() {
    return (
        <Styles>
            
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
            
        </Styles>
    )
}

export default Detail

