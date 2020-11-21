import React from 'react';
import styled from 'styled-components';
import bg1 from './images/bg1.png'
import import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';


const Styles = styled.div`
 .jumbo {
     background : url(${bg1});
     background-size : 100% 100%;
 }
`;


function Video() {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Video
