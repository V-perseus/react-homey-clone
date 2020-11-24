import React from 'react'
import {Carousel, Container} from 'react-bootstrap';
import img1 from './images/entrance.jpg';
import img2 from './images/inside.jpg';
import img3 from './images/outside-golf.png';
import img4 from './images/outside.jpg';
import img5 from './images/third-background.jpg';
import styled from 'styled-components';


const Styles = styled.div`
    .carousel-item img{
        height: 500px;
    }
    .carousel-caption h3{
        color: yellow:
    }
`;

function ControlledCarousel() {
    
    return (
        <Styles>
            <Container>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Entrance</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>First Floor</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Golf Site</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img4}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Park</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img5}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Gym</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel> 
        </Container>
        </Styles>
        
        
        )
}

export default ControlledCarousel
