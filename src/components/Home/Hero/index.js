import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';


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
    min-height: 500px; /* Fixed height */
    object-fit: cover; /* Ensure the image covers the entire area */
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
const IC = styled.div`
    flex-direction: column;
    width: 100%;
    opacity: 0;

    @media (max-width: 1100px) {
        
    }
`;
const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  

  @media (max-width: 768px) {
    align-items: center;
  }
    `;


const Memo2 = styled.div`
  color: white;
  display: flex;
  font-size: 30px;
  font-weight: 200;
  margin-bottom: -20px;
  letter-spacing: 12px;
  //line-height: .8; /* Adjust the line height to your preference */

  @media (max-width: 1100px) {
    font-size: 25px;
  }

  @media (max-width: 850px) {
    font-size: 20px;
  }
  @media (max-width: 620px) {
    font-size: 15px;
    letter-spacing: 9px;
}

  @media (max-width: 500px) {
    font-size: 10px;
  }

`;

const Memo3 = styled.div`
    color: white;
    display: flex;
    font-size: 120px;
    font-weight: 600;
    line-height: 1.6; /* Adjust the line height to your preference */
    font-family: 'Yeserva One', sans-serif; /* Applying the specified font */

    @media (max-width: 1100px) {
        font-size: 100px;
    }

    @media (max-width: 850px) {
        font-size: 70px;
    }

    @media (max-width: 620px) {
        font-size: 55px;
    }

    @media (max-width: 500px) {
        font-size: 35px;
        padding-top: 10px;
    }
`;


const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    margin-top: 50px;

    @media (max-width: 768px) {
      justify-content: center;
    }
`;

const Button = styled.a`
    padding: 5px 25px;
    width: 150px;
    height: 50px;
    background-color: transparent;
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border: 1px solid white;

    &:hover {
        background-color: white;
        border: 1px solid white;
        color: #0c2340;    
    }

`;

const ImageSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const tl = gsap.timeline();

  // Initial state (hidden)
        tl.set('.hero', { opacity: 0, y: '100%' });

        // Animation to bring the Container in from the left
        tl.to('.hero', { duration: 2, opacity: 1, y: '0', ease: 'power4.out' });

        // You can adjust the delay according to your needs
        tl.delay(1.5); // Wait for 1 second after the page fully loads before starting the animation

        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 7000); // Change the interval according to your preference

        return () => clearInterval(slideInterval);
    }, [images.length]);

    return (
        
        <SliderContainer>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Sedan+SC&family=Yeseva+One&display=swap');
</style>
            <SliderWrapper
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </SliderWrapper>
            <Overlay>
                <IC className='hero'>
            <MemoContainer >
                <Memo2>ROGERS STATE UNIVERSITY</Memo2>
                <Memo3>Honors Program</Memo3>
            </MemoContainer>
                <ButtonContainer>
                    <Button href='/roster'>View Students</Button>
                </ButtonContainer>
                </IC>
            </Overlay>
        </SliderContainer>
    );
};

export default ImageSlider;
