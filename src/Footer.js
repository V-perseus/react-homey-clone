import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';



const Styles = styled.div`

`;

function Footer() {
    return (
        <Styles>
            <Container fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <h1>The Link 345</h1>
                    </Col>
                    <Col xs={12} md={12}>
                        <h1>The Link 345</h1>
                    </Col>
                    <Col xs={12} md={12}>
                        <h1>The Link 345</h1>
                    </Col>

                </Row>
            </Container>
        </Styles>
    )
}

export default Footer
