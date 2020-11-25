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
                        <h1>The Link 345 Location</h1>
                        <p>Lô đất IC 32, Khu Đô Thị Nam Thăng Long, Tây Hồ, Hà Nội.</p>
                    </Row>
                </Container>
            
        </Styles>
    )
}

export default Detail

