import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import {Row} from 'react-bootstrap'

const Styles = styled.div`
    
`;

function Detail() {
    return (
        <Styles>
            
                <Container>
                    <Row className="row">
                        <h1>The management office in The Link 345</h1>
                        <p>Please feel free to contact us! The Link 345 is always by your side.</p>
                    </Row>
                </Container>
            
        </Styles>
    )
}

export default Detail

