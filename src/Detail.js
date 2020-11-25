import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Container} from 'react-bootstrap';
import styled from 'styled-components';
import {Row} from 'react-bootstrap'

const Styles = styled.div`
    
`;

function Detail() {
    return (
        <Styles>
            
                <Container>
                    <Row className="row">
                        <h1>Greeting of the link 345</h1>
                        <p>Hello residents, this apartment has now opened an apartment application service to offer better life. We will make apartments better only for residents with transparency and sincerity. We hope that new service will get close to all residents as quickly as possible. And resident can also communicate each other more than before. Our management office will do the best for our resident. We sincerely wish your peace and happiness The Link 345 Thank you.</p>
                    </Row>
                </Container>
            
        </Styles>
    )
}

export default Detail

