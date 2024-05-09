import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../../images/CallToAction.png'; // Import your image here

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: white;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 35, 64, .6); /* Adjust the overlay color and opacity */
  z-index: 1;
`;

const TextContainer = styled.div`
  z-index: 2; /* Ensure text is above the overlay */
  display: flex;
  width: 50%;
  justify-content: center;
  padding-bottom: 50px;

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   // padding-left: 50px;
    width: 100%;
    z-index: 2;

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

const Text = styled.div`
    font-size: 50px;
    font-weight: 600;
    font-family: 'Yeserva One', sans-serif; /* Applying the specified font */
    text-align: center;

    @media (max-width: 600px) {
      font-size: 40px;
    }

    @media (max-width: 400px) {
      font-size: 32px;
    }

    

`;


const CTA = () => {
  return (
    <Container>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Sedan+SC&family=Yeseva+One&display=swap');
</style>
      <Overlay />
      <TextContainer>
        <Text>Check Out Our Favorite Works We Have Studied</Text>
      </TextContainer>
      <ButtonContainer>
      <Button href='/library'>Visit Library</Button>
      </ButtonContainer>
    </Container>
  );
};

export default CTA;
