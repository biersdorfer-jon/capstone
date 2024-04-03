import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const SliderWrapper = styled.div`
    display: flex;
    transition: transform 3s ease;
`;

const Slide = styled.img`
    width: 100%;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity here */
    z-index: 1; /* Make sure the overlay stays on top of the slides */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
`;

const ImageSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 10000); // Change the interval according to your preference

        return () => clearInterval(slideInterval);
    }, [images.length]);

    return (
        <SliderContainer>
            <SliderWrapper
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </SliderWrapper>
            <Overlay>
                {/* Add your text here */}
                
            </Overlay>
        </SliderContainer>
    );
};

export default ImageSlider;
