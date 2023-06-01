import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Mila1 from '../components/images/Mila1.png';
import Pizza1 from '../components/images/Pizza1.png';
import Mila2 from '../components/images/Mila2.png';

export const CarouselFood = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Mila1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='fs-1 '>Mila House</h1>
                    <p>La Casa de la Milanesa.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Pizza1}
                    alt="First slide"
                />
            <Carousel.Caption>
                <h1 className='fs-1'>Mila House</h1>
                <p>La Casa de la Milanesa.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Mila2}
                    alt="First slide"
                />
            <Carousel.Caption>
                    <h1 className='fs-1'>Mila House</h1>
                    <p>La Casa de la Milanesa.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}
