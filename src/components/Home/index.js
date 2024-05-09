import React from 'react';
import Slide from './Slider';
import styled from 'styled-components';
import ImageSlider from './Hero';
import HonorsLogo1 from '../../images/H1.png';
import HonorsLogo2 from '../../images/H2.png';
import HonorsLogo3 from '../../images/H3.png';
import HonorsLogo4 from '../../images/H4.png';
import HonorsLogo5 from '../../images/H5.png';
import HonorsLogo6 from '../../images/H6.png';
import HonorsLogo7 from '../../images/H7.png';
import HonorsLogo8 from '../../images/H8.png';

import { InstagramEmbed } from 'react-social-media-embed';
import About from './About';
import CTA from './CTA';

const Container = styled.div`
  padding-top: 160px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-direction: column;
  padding-bottom: 200px;

  @media (max-width: 400px) {
    padding-top:
  }
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%; 
  height: 0px;/* Ensure it takes the full width of the parent */
  margin-bottom: 100px; /* Add margin to push down the Instagram embed */
`;

const WhiteDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30%; /* Adjust width as needed */
  height: 100%; /* Cover entire SlideContainer */
  background-color: white;
  z-index: 3; /* Ensure the white div is on top of the Slide */
`;

const LeftWhiteDiv = styled(WhiteDiv)`
  left: 0;
`;

const RightWhiteDiv = styled(WhiteDiv)`
  right: 0;
`;

const TitleContainer = styled.div`
  width: 70%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  padding-bottom: 5px;

`;

const images = [
  HonorsLogo1,
  HonorsLogo2,
  HonorsLogo3,
  HonorsLogo4,
  HonorsLogo5,
  HonorsLogo6,
  HonorsLogo7,
  HonorsLogo8,
  // Add more image imports as needed
];

const HomeFinal = () => {
  return (
    <Container>
      <ImageSlider images={images} />
      <About />

      <CTA />

      <TitleContainer>      
      <Title>Meet Your Honors Officers</Title>
      <svg height="45" width="300">
        <line x1="0" y1="0" x2="300" y2="" style={{strokeWidth: 7, stroke: '#ba0c2f'}} />
      </svg>
              
    </TitleContainer>
      <SlideContainer style={{marginBottom: '250px'}}>
        <LeftWhiteDiv />
        <Slide />
        <RightWhiteDiv />
      </SlideContainer >
      

           </Container>
  );
};

export default HomeFinal;
