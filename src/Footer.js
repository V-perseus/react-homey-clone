import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Row, Container, Col} from 'react-bootstrap';



const Styles = styled.div`
.row {
    background:pink;
}
`;

function Footer() {
    return (
        <Styles>
            <Container fluid>
                <Row className="text-center">
                    <Col xs={12} md={6} className="mt-5">
                        <h1>Support</h1>
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}

export default Footer
